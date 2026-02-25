import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const email = formData.get('email');
        const parentName = formData.get('parent_name');
        const phoneNumber = formData.get('phone_number');
        const school = formData.get('school');

        // 1. Validate inputs
        if (!email || !parentName || !phoneNumber || !school) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // 2. Airtable Integration
        const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
        const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

        if (AIRTABLE_API_KEY && AIRTABLE_BASE_ID) {
            await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Brochure%20Downloads`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    records: [
                        {
                            fields: {
                                "Parent Name": parentName,
                                "Phone Number": phoneNumber,
                                "School": school,
                                "Parent Email": email,
                                "Timestamp": new Date().toISOString() // Tracking event
                            }
                        }
                    ]
                })
            });
        } else {
            console.log('No Airtable credentials found. Mocking successful brochure request:', { parentName, phoneNumber, school, email });
        }

        // 3. Redirect & Trigger Download
        // A standard pattern to trigger a file download AND redirect is tricky in a single HTTP response.
        // The easiest way for a Next.js server route that must redirect is to redirect to the Thank You page,
        // and have the Thank You page handle the client-side download via a script or meta-refresh.
        // Alternatively, we can return the PDF directly, but the spec asks to "Redirect -> /thank-you-brochure".

        // For now, redirect to the Thank You page. We will pass a query param to trigger the download.
        return NextResponse.redirect(new URL('/thank-you-brochure?download=true', request.url), 303);

    } catch (error) {
        console.error('Brochure Route Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

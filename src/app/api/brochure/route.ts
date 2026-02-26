import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            email,
            parent_name: parentName,
            phone_number: phoneNumber,
            school
        } = body;

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

        // 3. Return generic JSON success
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error('Brochure Route Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

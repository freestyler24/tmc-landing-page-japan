import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const studentName = formData.get('student_name');
        const school = formData.get('school');
        const email = formData.get('parent_email');

        // 1. Validate inputs
        if (!studentName || !school || !email) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 2. Airtable Integration (Server-side to protect keys)
        const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
        const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

        if (AIRTABLE_API_KEY && AIRTABLE_BASE_ID) {
            const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Programme%20Registrations`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    records: [
                        {
                            fields: {
                                "Student Name": studentName,
                                "School": school,
                                "Parent Email": email,
                                "Status": "Pending Initial Block",
                                "Timestamp": new Date().toISOString()
                            }
                        }
                    ]
                })
            });

            if (!response.ok) {
                console.error('Airtable Error:', await response.text());
                // We log the error but still redirect the user to not block their flow if CRM fails
            }
        } else {
            console.log('No Airtable credentials found. Mocking successful submission:', { studentName, school, email });
        }

        // 3. Redirect to Thank You page
        return NextResponse.redirect(new URL('/thank-you-registration', request.url), 303);

    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

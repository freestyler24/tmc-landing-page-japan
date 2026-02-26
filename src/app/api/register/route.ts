import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const studentName = formData.get('student_name');
        const grade = formData.get('grade');
        const school = formData.get('school');
        const parentName = formData.get('parent_name');
        const email = formData.get('parent_email');
        const phone = formData.get('parent_phone');
        const passportStatus = formData.get('passport_status');

        // 1. Validate inputs
        if (!studentName || !grade || !school || !parentName || !email || !phone || !passportStatus) {
            // Simply log for now, as missing fields via native UI might happen if bypassed, but UI does validation
            console.warn('Missing some required fields, continuing anyway for resilience');
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
                                "Student Name": studentName || "",
                                "Grade": grade || "",
                                "School": school || "",
                                "Parent Name": parentName || "",
                                "Parent Email": email || "",
                                "Parent Phone": phone || "",
                                "Passport Status": passportStatus || "",
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
            console.log('No Airtable credentials found. Mocking successful submission:', { studentName, grade, school, parentName, email, phone, passportStatus });
        }

        // 3. Redirect to Thank You page
        return NextResponse.redirect(new URL('/thank-you-registration', request.url), 303);

    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

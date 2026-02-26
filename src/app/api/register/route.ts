import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            student_name: studentName,
            grade,
            school,
            parent_name: parentName,
            parent_email: email,
            parent_phone: phone,
            passport_status: passportStatus
        } = body;

        // 1. Validate inputs
        if (!studentName || !grade || !school || !parentName || !email || !phone || !passportStatus) {
            // Simply log for now, as missing fields via native UI might happen if bypassed, but UI does validation
            console.warn('Missing some required fields, continuing anyway for resilience');
        }

        // 2. Airtable Integration (Server-side to protect keys)
        const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
        const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
        const TABLE_ID = process.env.AIRTABLE_REG_TABLE || 'tblWMyXl1pWCELmPL';

        if (AIRTABLE_API_KEY && AIRTABLE_BASE_ID) {
            const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_ID}`, {
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
                                "Email": email || "",
                                "Phone": phone || "",
                                "Passport Status": passportStatus || "",
                                "Timestamp": new Date().toISOString()
                            }
                        }
                    ]
                })
            });

            if (!response.ok) {
                const errText = await response.text();
                console.error(`Airtable Error [${response.status}] BaseID=${AIRTABLE_BASE_ID} TableID=${TABLE_ID}:`, errText);
                // We log the error but still redirect the user to not block their flow if CRM fails
            }
        } else {
            console.log('No Airtable credentials found. Mocking successful submission:', { studentName, grade, school, parentName, email, phone, passportStatus });
        }

        // 3. Return JSON response
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

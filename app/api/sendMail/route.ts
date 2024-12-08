export async function POST(request: Request) {
    try {
        const { email, subject, message } = await request.json();

        if (!email || !subject || !message) {
            return new Response(
                JSON.stringify({ message: 'Missing required fields: email, subject, or message' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const response = await fetch('http://localhost:8000/api/mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, subject, message }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            return new Response(
                JSON.stringify({
                    message: 'Failed to send data to external API',
                    error: errorResponse,
                }),
                { status: response.status, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const result = await response.json();
        return new Response(
            JSON.stringify({ message: 'Data sent successfully', data: result }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error: any) {
        console.error('Error in API handler:', error);
        return new Response(
            JSON.stringify({
                message: 'Internal Server Error',
                error: error.message,
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
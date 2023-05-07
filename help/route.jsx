/* INSIDE API AND ROUTE (/USERS) FOLDER 
Next.js supported HTTP methods:

1. GET: Retrieves data or resources from the server
export async function GET(request) {
    //handles requests for path
    const users = [
        { id : 1, name: 'John' },
        { id : 2, name: 'Jane' },
        { id : 3, name: 'Bob' }
    ];

    return new Response(JSON.stringify(users))
}

2. POST: Submits data to the server to create a new resource
3. PUT: Updates or replaces an existing resource on the server
4. PATCH: Partially updates an existing resource on the server
5. DELETE: Removes a specific resource from the server.
6. HEAD: Retrieves the headers of a resource without feching its body
7. OPTIONS: Retrieves the supported HTTP methods and other communication options for a resource.



*/
/* DATA FETCHING - All res is rendered before sending to the client


// 1. Static Site Generation (SSG) - fetched data is cached (default)
async function getDataSSG ({ params }:any) {
    const res = await fetch('https://apis.com');
    const data = await res.json();
}

// 2. Server Side Rendering (SSR) -  fetched data is not cached and refreshes at each iteration
async function getDataSSR ({ params }:any) {
    const res = await fetch('https://apis.com',
    { cache: 'no-store'}
    );
    const data = await res.json();
}

// 3. Incremental Static Generation (ISR) - feched data is cached for a set time and then automatically refreshed
async function getDataISR ({ params }:any) {
    const res = await fetch('https://apis.com',
    { next: { revalidate: 10 } }
    );
    const data = await res.json();
}

*/
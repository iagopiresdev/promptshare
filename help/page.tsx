/*page shown based on what directory it is

We can define metadata for SEO - this object is placed above the page

1. Static Metadata
export const metadata = {
    title: 'Home'
};

2. Dynamic Metadata
export async function generateMetadata({ params, searchParams }) {
    const product = await getProduct(params.id);
    return { title: product.title };
}


Example: app/user/page.tsx -> is acessible through the link www.sitex.com/user and it will render this page or the loader.
*/

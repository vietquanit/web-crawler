export const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import(/* webpackChunkName: "listUsers" */"./components/scrapePage/Home.vue")
    },
    {
        name: 'DetailProduct',
        path: '/detail',
        component: () => import(/* webpackChunkName: "listUsers" */"./components/scrapePage/DetailProduct.vue")
    },
    {
        path: '*',
        // component: Login,
        component: () => import(/* webpackChunkName: "NotFoundPage" */"./components/NotFoundPage.vue")
    }
];

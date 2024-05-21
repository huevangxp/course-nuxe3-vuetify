//
// export default defineNuxtRouteMiddleware((to, event) => {
//     let token = event.useCookie( 'token');
//     if (token && to.path !== '/') {
//         return navigateTo('/');
//     }
// });

export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token')

    if (token.value && to.path !== '/') {
        return  navigateTo('/')

    }
})

import { Router } from 'itty-router'

const router = Router() // no "new", as this is not a real class

router.get('/', req => {
    return new Response('Intial Commit Done')
})

addEventListener('fetch', e => {
    e.respondWith(router.handle(e.request))
})

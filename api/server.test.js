const server = require('./server')
const request = require('supertest')

const db = require('../data/db-config')

describe('server', () => {
    // beforeEach(async () => {
    //     await db('stuff').truncate()
    // })
    describe('get /', () => {
        it('returns 200', () => {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
    describe('post /', () => {
        const string = 'thing'
        it('gives back a status of 201', () => {
            return request(server).post('/')
                .send({ thing: string })
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })

        it('adds a thing to the database', async () => {
            await db('stuff').truncate()
            const string = 'thing'
            const existing = await db('stuff').where({ thing: string })
            expect(existing).toHaveLength(0)

            await request(server).post('/')
                .send({ thing: string })
                .then(res => {

                })
            const inserted = await db('stuff')
            expect(inserted).toHaveLength(1)
        })
    })

    describe('delete /:id', () => {
        it('returns 200 on success', () => {
            return request(server).delete('/1')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('deletes the item from the db', async () => {

            await request(server).delete('/1')
                .then(res => {

                })

            const deleted = await db('stuff').where({ id: 1 })
            expect(deleted).toHaveLength(0)

        })
    })
})
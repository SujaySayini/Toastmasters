const db = require('./db')
const createClub = require('../controllers/pages')
const demoClub = require('../models/ClubModel')

beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async() => await db.closeDatabase())


describe('Club createed', () => {

    it('First club', async done =>{
        const newClub = await createClub({clubName:"Club Test",
        description:"This is test club", meetingTime:"test time", announcement:"test",
        location:"Rutgers", picture:"AAAAAA"})

        expect(newClub.clubName).toEqual("Club Test")
        expect(newClub.description).toEqual("This is test club")
        expect(newClub.meetingTime).toEqual("test time")
        expect(newClub.announcement).toEqual("test")
        expect(newClub.location).toEqual("Rutgers")
        expect(newClub.picture).toEqual("AAAAAA")
    })
})

describe("Error thrown when", ()=>{
    it('club name not stated', async done =>{
        await createClub({discription: 'this is a test'})
        await expect(
            createClub({clubName:"Club Test",
        description:"This is test club", meetingTime:"test time", announcement:"test",
        location:"Rutgers", picture:"AAAAAA"})
        ).rejects.toThrow()
        done();
    })

})

// cookie -> find the user -> find the club name : club has to be unique -> get club ->show club page
//

const GravityBall = require('./gravityball')


test('Jest is working properly', () => {
    expect(1+1).toBe(2);
    
}),

describe('Class GravityBall',() => {

    test("is initializable", () => {
        const gb = new GravityBall;
        expect(gb).toHaveProperty('gravity')
    })
})

import Hero from '../src/hero'

describe('Hero', () => {

  test('current position', () => {
    const hero = new Hero();
    expect(hero.position).toEqual({ x: 50, y: 500});
  })

  test('moves right', () => {
    const hero = new Hero();
    var current_x_position = hero.position.x
    hero.moveRight()
    expect(hero.position.x).toEqual(current_x_position + hero.SPEED)
  })

  test('moves left', () => {
    const hero = new Hero();
    var current_x_position = hero.position.x
    hero.moveLeft()
    expect(hero.position.x).toEqual(current_x_position - hero.SPEED)
  })


  test('draw function', () => {
    var ctx = {
      fillStyle: '',
      clearRect: function () {
        return 'changed'
      },
      fillRect: function () {
        return 'changed'
      }
    }
    const hero = new Hero();
    hero.draw(ctx)
    expect(ctx.fillStyle).toEqual('#0ff')
  })
})
/*

Created on 11/28/2023
by: Nathan Foreman

*/

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

  const basePitch = {
    pitcherName: ['Lou', 'Mark', 'Sam', 'Tod'],
    pitchType: ['Fastball', 'Curveball', 'Slider', 'Changeup' ],
    pitchResult: ['Strike', 'Foul Ball', 'Homerun']
  }

  let baseballPick = []

  for(let prop in basePitch) {
    let optionIdx = generateRandomNumber(basePitch[prop].length)
  

  switch (prop) {
    case 'pitcherName': 
        baseballPick.push(`Your pitcher is "${basePitch[prop][optionIdx]}".`)
        break
    case 'pitchType': {
        baseballPick.push(`You threw a ${basePitch[prop][optionIdx]}.`)
        }
        break
        case 'pitchResult': {
            baseballPick.push(`${basePitch[prop][optionIdx]}.`)
            }
        break
        default: 
            baseballPick.push('There is not enough info')
    }
  }

function formatPitch(pitch) {
    const formatted = baseballPick.join('\n')
    console.log(formatted)
}
formatPitch(basePitch);
let heart_count = 0
document.querySelectorAll('.add_hearts').forEach(function (heart) {
  heart.addEventListener('click', function (e) {
    e.preventDefault()
    heart_count++
    heart_counter.innerText = heart_count
  })
})

let coins = 100
const historyContainer = document.getElementById('call_history')
const clearButton = document.getElementById('clear_history')

document.querySelectorAll('.coin_deduct').forEach(function (coin) {
  coin.addEventListener('click', function (e) {
    e.preventDefault()
    const service_name = coin.getAttribute('data-name')
    const service_number = coin.getAttribute('data-number')

    if (coins >= 20) {
      coins -= 20
      document.getElementById('coin_counter').innerText = coins
      alert(`Calling ${service_name} ${service_number}`)

      const record = document.createElement('div')
      record.className =
        'flex justify-between items-center bg-gray-100 rounded-lg px-4 py-4 mb-2'

      record.innerHTML = `
        <div>
          <h1 class="font-bold text-lg">${service_name}</h1>
          <p>${service_number}</p>
        </div>
        <span>${new Date().toLocaleTimeString()}</span>
      `

      historyContainer.prepend(record)
    } else {
      alert('You do not have enough coins! Each call costs 20 coins!')
    }
  })
})

clearButton.addEventListener('click', function () {
  historyContainer.innerHTML = ''
})

let copy_count = 0
const copy_counter = document.getElementById('copy_counter')
document.querySelectorAll('.add_copy').forEach(function (copy) {
  copy.addEventListener('click', function (e) {
    e.preventDefault()
    const service_number_copy = copy.getAttribute('data-number')
    navigator.clipboard.writeText(service_number_copy)
    copy_count++
    copy_counter.innerText = copy_count
    alert(`Copied number ${service_number_copy}`)
  })
})

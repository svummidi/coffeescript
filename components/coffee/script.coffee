a = 3

do addStuff = ->
  a = 4
  b = "Srini"
  c = true
  $('#content').append("Don't miss it!")

 myList = ["Srini", 3, true]
 console.log myList
 numbers = [1
 2
 3
 4
 5]
 console.log numbers
 numbersalt = [1..5]
 console.log numbersalt
 numberignorelast = [0...5]
 console.log numberignorelast
 numbers1to10 = [0..9]
 console.log numbers1to10
 start = numbers1to10[0..2]
 console.log "Start : #{start}"
 middle = numbers1to10[3...-2]
 console.log "Middle : #{middle}"
 end = numbers1to10[-2..]
 console.log "End : #{end}"
 copy = numbers1to10[..]
 console.log "Copy : #{copy}"
 copy[3..6] = ["a","b","c","d"]
 console.log "Copy  after replace : #{copy}"
 myText = "The quick brown 
 fox jumps over
 the lazy car"
$('#content').append(" #{myText}")

myObj = 
	name: "Srini"
	travel: true
	heros: [
			{
			name: 'Bob'
			age: 30
			}
			{
			name: 'Pete'
			age: 40
			}
	]

name = "Srinivas"
if name == 'Srinivas'
	name = "Srinivas Rao V"

console.log name

names = ["Barot Bellingham", "Constance Smith", "Hassum Harrod", "Hillary Goldwynn","Xhou Ta"]

for thing,i in names when thing isnt 'Hillary Goldwynn'
	console.log thing
	console.log "#{i} #{thing}"
info = 
  name: 'Ray'
  title: 'Staff Author'
  tuts: 'http://lynda.planetoftheweb.com'

for key, value of info
  console.log "#{key}: #{value}"



// import './index'
// console.log("boom")

export let decode=(mStr) => {
  to_be_deleted = []  // '2->x'
  to_be_created = []  // '2->n'
  to_be_swapped = [] // '2<->3'

  mStr.split(',').map( s => { 
    let [src, dest] = s.replaceAll(' ', '').split('->')
    switch(dest){
      case 'x':
        to_be_deleted.push(src)
        break;
      case 'n':
        to_be_created.push(src)
        break;
      default:
        if (s.includes('<->')) {
          [src, dest] = s.replaceAll(' ', '').split('<->')
          // to_be_swapped.push([[src, dest], [dest, src]])
        }
        break;
    }
  })

  return [
    to_be_deleted,
    to_be_created,
    to_be_swapped,
  ]
}

'w1_t0=>w1_t1'
'w2,t2=>w1,t1'
'w1,t1=>w1,t0'
'w1,t1=>d'
'w1,t2=>w3'
export let swap = (tabStr, mappingString) => {
  const [d,c,sp] = decode(mappingString)
  tabStr
  sp.map(e => {
    [e[0], e[1]] = [e[1], e[0]]
  })
  return sp
}

let shuffle = (arr) => {
old_arr = [...arr]

// in place modification
// arr.forEach((v, i, a) => {
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
// });

//thanks to  https://stackoverflow.com/a/46545530/623546
arr = arr
.map((value) => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)

// dom shuffling...
old_arr.forEach((v, i)=>{
  swapNodes(old_arr[i], arr[i])
})

return arr;
};



// thanks to https://stackoverflow.com/a/44562952/623546 :) 
export function swapNodes(n1, n2) {
  tabs = Array.from(document.querySelectorAll('a'))
  Array.from(document.querySelectorAll('.tab.tab-lifted')).map(t=> t && t.classList.remove('tab-active'))
  n1.classList.add('tab-active')
  var p1 = n1.parentNode;
  var p2 = n2.parentNode;
  var i1, i2;

  if ( !p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1) ) return;

  for (var i = 0; i < p1.children.length; i++) {
      if (p1.children[i].isEqualNode(n1)) {
          i1 = i;
      }
  }
  for (var i = 0; i < p2.children.length; i++) {
      if (p2.children[i].isEqualNode(n2)) {
          i2 = i;
      }
  }

  if ( p1.isEqualNode(p2) && i1 < i2 ) {
      i2++;
  }
  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

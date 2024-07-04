// import { path } from "./globalVariables.js"

// console.log(path);
// async function app() {
    
//     const data = await retrieveData();
//     console.log(data);
//     renderDataInconsole(data);
// }


// const data = ref([]);

// const fetchData = async () => {
//   try {
//     const response = await fetch('/embalses.json');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     items.value = data;
//   } catch (error) {
//     console.error('There was a problem with the fetch operation:', error);
//   }
// };
import { ref, onMounted } from 'vue'

const data = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/data.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    data.value = await response.json()
    console.log(data.value)
  } catch (error) {
    console.error('Error fetching the data:', error)
  }
})
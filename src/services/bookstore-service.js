export default class BookstoreService {

   data = [
      {
         id: 1,
         title: 'Production-Ready Microservices',
         author: 'Susan J. Foweler',
         price: 45,
         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
      },
      {
         id: 2,
         title: 'Release It!',
         author: 'Michael T. Nygard',
         price: 55,
         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
      },
      {
         id: 3,
         title: 'Release It 2!',
         author: 'Michael T. Nygard',
         price: 60,
         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
      }
   ];

   getBooks() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (Math.random() > 0.75) {
               console.log('Reload page. This error was made on purpose.');
               reject('Something went wrong')
            }
            resolve(this.data)
         }, 1000)
      })
   }
}
// import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
import { storageService } from '../services/async-storage-service.js'
// const SCORE_FOR_REVIEW = 10
const USER_KEY = 'user_db'

const gUsers = [{
        _id: "51399391",
        fullname: "Ronit Rozen",
        username: "Ronit@rozen.com",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg",
        about: "Over 8 years experience, I can produce any style you want and every genre you request.Feel free to contact me before placing the order and I will reply any questions.",
        reviews: [{
            id: "dfe33",
            createdAt: 1626541187128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "6483790",
        fullname: "Homer Lager",
        username: "Homer",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i.pinimg.com/originals/d7/c1/de/d7c1dedd54b2db6b9eda7b5f0d0a1faa.jpg",
        about: "I design and build only custom websites with attention to your customers' needs. I strive for minimal aesthetics and modern visuals but make it easy to use. I don't use templates and don't do fast design.",
        reviews: [{
            id: "cr3372",
            createdAt: 1626541147128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "64493278",
        fullname: "Roi Siko",
        username: "Roi",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlg13K7pmpCud99-WnIFi-5GoiFcjp4i3yQr98MPmG984ACibH8KKKjoE1Y6uYiJqArA&usqp=CAU",
        about: "Hi I am a Computer Science Engineering degree holder with more than 4 years of experience in python. I have completed a huge number of python related projects using various python libraries.",
        reviews: [{
            id: "mk43m5",
            createdAt: 1626541147128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "90378425",
        fullname: "Yacky Rock",
        username: "Yacky",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i.pinimg.com/originals/00/a5/9c/00a59c194e16fbb7b48fce55a51f9872.jpg",
        about: "Perfect Place for your any graphic design Needs! I'll do any graphic design or photoshop work in 24 hours for you! Low on budget? but want High Quality work? then this GIG is just for you! Flyers, Google Ads, Website images, Portrait, vector designs, business cards, social media graphics,Product Photos: for Amazon, eBay (& for any other platform you need)",
        reviews: [{
            id: "kl3n24k2n",
            createdAt: 1626541147128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "90327489",
        fullname: "Sol Tick",
        username: "Sol",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i0.wp.com/www.hadviser.com/wp-content/uploads/2019/04/16-medium-hairstyle-with-blonde-ombre-and-bangs-9RumfSs4PX.jpg?resize=1010%2C1010&ssl=1",
        about: "Hi, I’m Aly, professionally trained graphic designer talent. I’ve already completed thousands of orders here on Fiverr with 5-star reviews. That’s because I produce  high quality graphics that are ready for you to use and provide excellent customer service. Looking for a professionally designed Flyer to promote your product, business or anything you want ?",
        reviews: [{
            id: "m23m52",
            createdAt: 1626541147128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "90327489",
        fullname: "Sol Tick",
        username: "Sol",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i0.wp.com/www.hadviser.com/wp-content/uploads/2019/04/16-medium-hairstyle-with-blonde-ombre-and-bangs-9RumfSs4PX.jpg?resize=1010%2C1010&ssl=1",
        about: "Hi, I’m Aly, professionally trained graphic designer talent. I’ve already completed thousands of orders here on Fiverr with 5-star reviews. That’s because I produce  high quality graphics that are ready for you to use and provide excellent customer service. Looking for a professionally designed Flyer to promote your product, business or anything you want ?",
        reviews: [{
            id: "m23m52",
            createdAt: 1626541147128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "083497",
        fullname: "Koby Daniel",
        username: "Koby",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://cdn.visioncenter.org/wp-content/uploads/2020/09/round-face-shape-wayfarers-1024x1024.jpg",
        about: "I am a skilled, Architect with +12 years of experience in residential building projects and 3D BIM Models. I am also a Revit Certified Professional and a Black belted 3D Design Coordinator. I have delivered numerous mega projects within various countries including USA, Canada, Middle East and Gulf. I firmly believe my key-skill is that I pay attention to details and always prioritize quality.",
        reviews: [{
            id: "nk32kl4",
            createdAt: 1626541147128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "51399392",
        fullname: "Davir Ronen",
        username: "Davir@ronen.com",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIjt1729YRBsVKe30AwJ2rHv4nWJBrUxxsQ&usqp=CAU",
        about: "Hello, I am Davir Ronen Structural & Design Engineer in CECB ( Central Engineering Consultancy Bureau). Under this gig i design your dream home and provide you High Quality photo realistic Interior/Exterior render images. If you need more than that, i can provide you a video flythrough of your DREAM HOME also ...",
        reviews: [{
            id: "dAA33",
            createdAt: 1626541147128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "51395444",
        fullname: "Yuli Potalov",
        username: "Yuli",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGa_HSPmOuXZjwVPe3iRFse3_ev61GED0hTg&usqp=CAU",
        about: "Message me first before ordering so we can discuss about this gig. In this gig $5 will do you basic, simple and nice editing, but for more complex editing the price will increase. We can discuss and agree about the price. The price will depend on how complex the graphic job.",
        reviews: [{
            id: "aaw13",
            createdAt: 1626541157128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "5139899",
        fullname: "Muki Levi",
        username: "Muki",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        about: "Hello there, My name is Muki Levi, a Senior Web Developer in website development 24/7. Why choose me? I have experience with a large range of projects in Wordpress, including but not limited to a business website, blog, e-commerce, agency, directory listing, job portal, real estate and many more. I work with a focus on Standard, Aesthetics, and Professionalism to deliver the right product for your business.",
        reviews: [{
            id: "dfFDW",
            createdAt: 1626541187008,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "755443",
        fullname: "Dana Lim",
        username: "Dana",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V0XCkHjYbLW3uy8osbkaWDGGOEuQnfJcuw&usqp=CAU",
        about: "If your audio needs special repair, please send it to me before ordering to determine if I can help. If you are looking for a professional audio editor who works with industry-best tools, then let's talk about how I can help.",
        reviews: [{
            id: "ZX2e3",
            createdAt: 1626540887128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }

        }]
    },
    {
        _id: "511344234",
        fullname: "Clode Deli",
        username: "Clode",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
        about: "This Gig is of one of many design kinds we offer. Flat design concepts are one of our fortes. For the logo to be timeless it doesn’t need to be with complex structures or patterns. It just needs to be simple, memorable and which gives a distinctive essence to your business",
        reviews: [{
            id: "hgh321",
            createdAt: 1626540887128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "76487326",
        fullname: "Mike Din",
        username: "Mike",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-gsRmxFQGy_0ciXHr-rwvWjvrV1EeBGmgQ&usqp=CAU",
        about: "I am a professional and Unique, creative logo design service provider, offering 100% original and conceptual layout solutions for businesses of varying sizes. The creativity of your work will be the true representative of your business and natch its nature and standard.",
        reviews: [{
            id: "kj45n3",
            createdAt: 1626540887128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "76564763",
        fullname: "Jack Kob",
        username: "Jack",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        about: "we are a professional design team having more than 5 years of experience. So are creating modern and minimal logos with Business card And Stationery with this gig.",
        reviews: [{
            id: "b2b24",
            createdAt: 1626540887128,
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: "/img/img2.jpg"
            }
        }]
    },
    {
        _id: "31243565",
        fullname: "Rita Costa",
        username: "Rita",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-7.jpg",
        about: "PLEASE CONTACT BEFORE PLACE AN ORDER, so we can discuss more about the time frame and price. Dear Client, I am experienced architecture and interior 3D designer. I can do the design, 2d plans and elevations for the building you want.I make photo-realistic renders using 3ds Max,Corona, Vray and Photoshop. I will determine your goals and requirements of the project, make interior spaces functional, and beautiful by solving space requirements and selecting decorative items, such as colors, materials, lighting, furniture, wall finishes and flooring. I use my sense of style, to develop designs that look great and are aesthetically pleasing. I can strongly assure you that I will be able to provide you according to your desire, taking care of all of the details for you.",
        reviews: [{
            id: "nk4j32n4",
            createdAt: 1626538187128,
            txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "Puki Ben-David",
                imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
            }
        }]
    },
    {
        _id: "5112331",
        fullname: "Roni Ron",
        username: "Roni",
        password: "1234",
        from: "England",
        memberSince: "May 2021",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TRmnlIPn36w1HuBoXo7mreaRsINRXlhFWg&usqp=CAU",
        about: "I'm Roni and I'm available to be your video spokesperson. I have extensive spokesperson, acting and modeling experience. Work with a pro that can effectively communicate your message.",
        reviews: [{
                id: "ALs12",
                createdAt: 1626538187128,
                txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
                rate: 4,
                by: {
                    _id: "u102",
                    fullname: "Puki Ben-David",
                    imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                }

            },
            {
                id: "11Ppo",
                createdAt: 1626541100128,
                txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
                rate: 4,
                by: {
                    _id: "u102",
                    fullname: "Puki Ben-David",
                    imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                }

            },
            {
                id: "Klaa3",
                createdAt: 1626541120128,
                txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
                rate: 4,
                by: {
                    _id: "u102",
                    fullname: "Puki Ben-David",
                    imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                }

            },
            {
                id: "KH566",
                createdAt: 1626541156128,
                txt: "The service was so good, I had a lot of fun using this service. Thank you very much I really aprecciate it. Just one thing, he took a little bit more time than garunteed but other than that the whole experience was nice. ",
                rate: 4,
                by: {
                    _id: "u102",
                    fullname: "Puki Ben-David",
                    imgUrl: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                }
            }
        ]
    },
]


export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    // update,
    save,
    getLoggedinUser,
    // increaseScore
}

// window.userService = userService
getUsers()

async function getUsers() {
    // return storageService.query('user')
    // return httpService.get(`user`)
    var users = await storageService.query(USER_KEY);
    if (!users || !users.length) users = gUsers;
    localStorage.setItem(USER_KEY, JSON.stringify(users));
    return users
}

function getById(userId) {
    // return storageService.get('user', userId)
    // return httpService.get(`user/${userId}`)
    return storageService.get(USER_KEY, userId)
}

function remove(userId) {
    return storageService.remove(USER_KEY, userId)
        // return httpService.delete(`user/${userId}`)
}


function save(user) {
    if (user._id) {
        return storageService.put(USER_KEY, user)
    } else {
        return storageService.post(USER_KEY, user)
    }
}

async function signup(userCred) {
    const user = await storageService.post(USER_KEY, userCred)
        // const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
}

// async function increaseScore(by = SCORE_FOR_REVIEW) {
//     const user = getLoggedinUser()
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }

async function login(userCred) {
    const users = await storageService.query(USER_KEY)
    const user = users.find(user => user.username === userCred.username)
    return _saveLocalUser(user)

    // const user = await httpService.post('auth/login', userCred)
    // if (user) return _saveLocalUser(user)
}

function logout() {
    sessionStorage.clear()
        // return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser') || 'null')
}
export default class BarbershopService {
    data = [{
        id: 1,
        title: 'men haircut',
        man: 'Alex Petrov',
        price: 100,
        coverImage: 'https://i.pinimg.com/originals/e9/0d/0b/e90d0b5ab7acfdfce228d73b941c4186.jpg'
    },
        {
            id: 2,
            title: 'beard highlighting',
            man: 'Yriy Vlasov',
            price: 250,
            coverImage: 'https://avatars.mds.yandex.net/get-pdb/1432322/8c2a1351-b188-40b4-89d9-b6c4947ad255/s600'
        },
        {
            id: 3,
            title: 'eyebrow correction',
            man: 'Maria Serebkina',
            price: 850,
            coverImage: 'https://hardys.one/wp-content/uploads/2018/02/%D0%BA%D0%BE%D1%80%D1%80%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-%D0%B1%D1%80%D0%BE%D0%B2%D0%B5%D0%B9-2.jpg'
        }
    ];

    getBarbers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.80) {
                    reject(new Error("Something wrong "))
                }
                else {
                    resolve(this.data)
                }
            }, 1000);
        });

    }

}
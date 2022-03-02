
const oneMinute = 60000;
// export const environments =[
//     {
//         name: "DeV",
//         apps: [
//             {url: "http://localhost:8090/ "}
//         ]
//     },
//     {
//         name: "FQT",
//         apps: [
//             {url: "http://localhost:8091 "}
//         ]
//     },
//     {
//         name: "PERF",
//         apps: [
//             {url: "http://localhost:8092"}
//         ]
//     },
//     {
//         name: "STAGE",
//         apps: [
//             {url: "http://localhost:8093 "}
//         ]
//     },
//     {
//         name: "PROD",
//         apps: [
//             {url: "http://localhost:8094 "}
//         ]
//     }
// ]

export const environments = [
    {
        name: "PROD",
        apps: [
            {
                url: "www.example.com",
                name: "Production Web",
                interval: oneMinute
            }
        ]
    }
]
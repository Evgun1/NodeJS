import { season, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import getDataFromServer from './default-export.mjs';
import DEFAILT_SERVE, {
    USERNAME as MY_USERNAME,
    PASSWOERD as MY_PASSWOERD,
} from './mixed-exports.mjs';

console.log(season);
console.log(temperature);

console.log(isRaining);
console.log(humidity);

getDataFromServer('https://jsonplaceholder.typicode.com/todos/1')
    .then((post) => console.log(post))
    .catch((err) => console.log(err));

console.log(DEFAILT_SERVE);
console.log(MY_USERNAME, MY_PASSWOERD);

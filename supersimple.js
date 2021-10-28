import http from 'k6/http';

export default function () {
  http.get('http://cluster.nicolevanderhoeven.com/api/v2/pokemon/pikachu');
}
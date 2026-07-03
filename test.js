import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const response = http.post(
    'http://localhost:8081/request-registration',
    JSON.stringify({ email: 'test@example.com' }),
    { headers: { 'Content-Type': 'application/json' } },
  );

  check(response, {
    'status is 204': (r) => r.status === 204,
  });
}

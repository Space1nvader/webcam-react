import * as Yup from 'yup';
import { fromUnixTime } from 'date-fns';

Yup.addMethod(Yup.string, 'Eng', function Eng(err = 'Только английские буквы') {
  return this.matches(/^[^а-яА-ЯёЁ]+$/, err);
});

Yup.addMethod(Yup.string, 'Rus', function Rus(err = 'Только русские буквы') {
  return this.matches(/^[^a-zA-Z]+$/, err);
});
Yup.addMethod(Yup.string, 'Req', function Req(err = 'Обязательное поле') {
  return this.required(err);
});
Yup.addMethod(Yup.number, 'Positive', function Positive(err = 'Значение должно быть больше нуля') {
  return this.positive(err);
});
Yup.addMethod(Yup.number, 'MinAge', function (message) {
  return this.test('test-min-age', message, (value) => {
    const date = fromUnixTime(value);
    const inputDate = new Date(date.getFullYear() + 18, date.getMonth(), date.getDate());
    return inputDate <= new Date();
  });
});

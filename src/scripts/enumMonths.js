/**
 * An object mapping Portuguese month names (strings) to their corresponding numerical month values (integers, 1-12).
 * 
 * @example
 * console.log(months['Janeiro']); // Output: 1
 * console.log(months[5]); // Output: 'Maio'
 * 
 * @author Nycolas Felipe
 */
const months = {};
months[months[1] = 'Janeiro'] = 1;
months[months[2] = 'Fevereiro'] = 2;
months[months[3] = 'Março'] = 3;
months[months[4] = 'Abril'] = 4;
months[months[5] = 'Maio'] = 5;
months[months[6] = 'Junho'] = 6;
months[months[7] = 'Julho'] = 7;
months[months[8] = 'Agosto'] = 8;
months[months[9] = 'Setembro'] = 9;
months[months[10] = 'Outubro'] = 10;
months[months[11] = 'Novembro'] = 11
months[months[12] = 'Dezembro'] = 12;
export default months;
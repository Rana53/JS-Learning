var person = [
    { name: 'rakib', age: 20},
    { name: 'jamil', age: 23},
    { name: 'sakib', age: 18},
    { name: 'sojib', age: 15},
    { name: 'gouri', age: 9}
]

person.sort((a,b) => {
    if( a.name > b.name)
        return 1;
    else if (a.name < b.name)
        return -1;
    else
        return 0;
});
console.log(person);

/*
here u used "<" symbol for compare function in sorting. this symbol sort a string based on character by character (ASSCI character) not in string length.
you used 5 name  and each one first character is R,j,s,s,g where ASSCI code of each is 
R = 82
j = 106
s = 115
s = 115
g = 103
so if u sort all then u got R ("Rakib") < g ("gouri") < j ("jamil") < s ("sojib") = s ("Sakib")
in your 5 name, u have two word (sojib & sakib) whose start  with same character 's'.
so here compare with second character of each word.in sojib second character is 'o'
and in sakib second character is 'a'.
character 'a' is smaller then 'o' that's why sakib is smaller then sojib.

solution: if u wanna "gouri" on top u gonna replace character 'R' in Rakib with small character 'r' 
that means use "rakib" instead of "Rakib"
*/
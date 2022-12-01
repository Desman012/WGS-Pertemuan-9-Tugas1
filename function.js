// memanggil module fs(filesystem) dengan metode require
const fs = require('fs');
const { rawListeners } = require('process');

//membuat logika apabila folder sudah dibuat atau belum
const dirPath = './data'
if (!fs.existsSync(dirPath)) {

    //membuat folder
    fs.mkdirSync(dirPath);
}

//membuat funsi loadData
const loadContact = () => {
    const file = fs.readFileSync('./data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    return contacts;
}

//membuat logika apakah file constacts.json sudah dibuat atau belum
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {

    //membuat file
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}


//membuat fungsi menampilkan semua data
const show = () =>{
    //memanggil fungsi loadContact
    const contacts = loadContact()
    // membuat perulangan dengan foreach
    contacts.forEach(contacts => {
        //menampilkan data ke terminal
        console.log(`Nama : ${contacts.name} \tEmail : ${contacts.email}\tTelpon : ${contacts.tlp}`);
    });
}

//membuat function dengan nama savedata dengan parameter name,email,tlp
const update = (name, email, tlp, update) => {
    //memanggil function loadData dan menyimpannya di variable contacts
    const contacts = loadContact()

    try{
        //mencari index data dengan mencocokan data json dengan masukan
    const updt = contacts.findIndex(data => {
        return data.name === update ||
        data.email === update ||
        data.tlp === update
    })

    //membuat logika untuk mengubah data
    if(contacts[updt].name === update)contacts[updt].name = name
    if(contacts[updt].email === update)contacts[updt].email = email
    if(contacts[updt] === update)contacts[updt].tlp = tlp

    console.log(`Update data yang mempunyai nama : ${update}`);

    // memasukan data ke file Json
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    //menangkap error apabila data tidak ada
    }catch(e){
        console.log("Data not found");
        return false;
    }
}

//meng-export module
module.exports = { update, show}
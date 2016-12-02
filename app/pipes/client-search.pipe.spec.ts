import {ClientSearchPipe} from './client-search.pipe';
import {Client} from '../models/client.model';

let client1 = {
    "general": {
        "firstName": "Liana",
        "lastName": "Crooks",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
    },
    "job": {
        "company": "Ledner, Johnson and Predovic",
        "title": "Investor Functionality Coordinator"
    },
    "contact": {
        "email": "Gerry_Hackett77@gmail.com",
        "phone": "(895) 984-0132"
    },
    "address": {
        "street": "1520 Zemlak Cove",
        "city": "New Devon",
        "zipCode": "42586-7898",
        "country": "Guinea-Bissau"
    }
};

let client2 = {
    "general": {
        "firstName": "Deontae",
        "lastName": "Dare",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
    },
    "job": {
        "company": "D'Amore, Dicki and Borer",
        "title": "International Applications Consultant"
    },
    "contact": {
        "email": "Kellie.Marvin38@yahoo.com",
        "phone": "1-615-843-3426 x600"
    },
    "address": {
        "street": "65901 Glover Terrace",
        "city": "Alden ton",
        "zipCode": "57744-4248",
        "country": "Kenya"
    }
};

let client3 = {
    "general": {
        "firstName": "Cortez",
        "lastName": "Pacocha",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg"
    },
    "job": {
        "company": "McKenzie Group",
        "title": "Forward Branding Developer"
    },
    "contact": {
        "email": "Sage_Wiegand@hotmail.com",
        "phone": "725.583.0926 x0430"
    },
    "address": {
        "street": "376 Reginald Dam",
        "city": "Port Enid fort",
        "zipCode": "51294-8361",
        "country": "Belarus"
    }
};

let clientsData = [client1, client2, client3];

// very simple function to sort an array, so we can check equality of differently sorted arrays
// clients in our dataset do not have unique ID, but avatar can be considered reasonably unique value
// for our use case
let clientArraySort = function(client1: Client, client2: Client) {
    if (client1.general.avatar < client2.general.avatar) {
        return -1;
    } else if (client1.general.avatar > client2.general.avatar) {
        return 1
    }
    return 0;
};

describe('ClientSearchPipe', () => {
    let pipe = new ClientSearchPipe();

    it('searches for "Belarus" in the nested objects and count items', () => {
        let resultArray = pipe.transform(clientsData, 'Belarus');
        expect(resultArray.length).toBe(1); // there is one client from Belarus
        expect(resultArray[0]).toBe(client3);
    });

    it('does case-insensitive search ("mCKenZiE gROUp" will find "McKenzie Group")', () => {
        let resultArray = pipe.transform(clientsData, 'mCKenZiE gROUp');
        expect(resultArray.length).toBe(1); // one client in the sample data woriking in McKenzie Group
        expect(resultArray[0]).toBe(client3);
    });

    it('does not search in the object property names', () => {
        let resultArray = pipe.transform(clientsData, 'country');
        expect(resultArray.length).toBe(0); // country is object property, not value, should return 0 results
    });

    it('returns all clients on blank search', () => {
        expect(pipe.transform(clientsData, '')).toBe(clientsData);
    });

    it('finds two clients on "so" search', () => {
        let resultArray = pipe.transform(clientsData, 'so');
        expect(resultArray.length).toBe(2); // check number of items in an array
        expect(resultArray).toEqual([client1, client2]);    // items in the right order
        expect(resultArray.sort(clientArraySort)).toEqual([client2, client1].sort(clientArraySort));    // "wrong" order
    });

    it('returns no clients on search that is definitely not there', () => {
        expect(pipe.transform(clientsData, 'DNBsjwiaosiud')).toEqual([]);
    });

});
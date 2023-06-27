using cdb from '../db/invoice';

service invoice {
    entity invoice as projection on cdb.invoice;

    entity amount  as
        select from cdb.invoice {
            amount,
            quantity
        }
        where
            amount > 5000;


    entity readData {
        id          : Integer;
        items       : String(20);
        description : String(100);
        quantity    : Integer;
        amount      : Integer;
    }

    entity writedata {
        id          : Integer;
        items       : String(20);
        description : String(100);
        quantity    : Integer;
        amount      : Integer;
    }

    entity deletedata {
        id          : Integer;
        items       : String(20);
        description : String(100);
        quantity    : Integer;
        amount      : Integer;
    }

    action rejectIdoc(data : String) returns {
        Status : Integer
    };
}

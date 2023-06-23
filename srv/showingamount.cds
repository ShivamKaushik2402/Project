using cdb from '../db/invoice';

service showamount {
entity amount as select from cdb.invoice{amount,quantity} where amount>5000;
}

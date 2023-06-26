using cdb from '../db/invoice';

service invoice {
entity invoice as projection on cdb.invoice;
entity amount as select from cdb.invoice{amount,quantity} where amount>5000;
}
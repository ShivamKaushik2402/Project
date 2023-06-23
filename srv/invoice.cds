using cdb from '../db/invoice';

service invoice {
entity invoice as projection on cdb.invoice;
}
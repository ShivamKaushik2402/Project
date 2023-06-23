namespace cdb;
entity invoice{
    key id     : Integer;
    items      : String(20) ;
    description: String(100);
    quantity   : Integer; 
    amount     : Integer;
}


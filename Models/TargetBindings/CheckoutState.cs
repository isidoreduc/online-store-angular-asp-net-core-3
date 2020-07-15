using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models.TargetBindings
{
    public class CheckoutState
    {
        //the names of the properties defined by the CheckoutState class follow the JavaScript capitalization
        //convention, which will make the data easier to handle in the Angular part of the project
        public string name { get; set; }
        public string address { get; set; }
        public string cardNumber { get; set; }
        public string cardExpiry { get; set; }
        public string cardSecurityCode { get; set; }

    }
}

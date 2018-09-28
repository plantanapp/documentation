# Financial

### [Financial:CurrencyConverter]

    Embed a gocurrency.com currency converter.
    Read more about this gadget at http://www.gocurrency.com/add-converter.htm
      Syntax:
        [Financial:CurrencyConverter]

    To test the token, click Test Token button below and replace parameters (if any) with actual values.
      Examples:
        [Financial:CurrencyConverter]

    Displays currency conversion form.

### [Financial:LiveRates]

    Embeds a list of currencies.
    Read more about this gadget at http://www.gocurrency.com/add-converter.htm
      Parameters:
      - [optional]
      - String
      - List
      - List of currencies IDs to display. Separate them by semicolon.
      - Default Value: USD;EUR;GBP;JPY;CAD;AUD

      Syntax:
        [Financial:LiveRates(List="(Literal String)")]
        To test the token, click *Test Token* button below and replace parameters (if any) with actual values.
      Examples:
        [Financial:LiveRates]  
        Displays currency rates for default currencies (USD;EUR;GBP;JPY;CAD;AUD).
        [Financial:LiveRates(List="USD;EUR;GBP")]
        Displays currency rates for selected 3 currencies.
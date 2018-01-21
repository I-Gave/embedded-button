# Embedded Donation Button

Include this script on your page and then add elements with the 'btn-igave' class and the data-igave attributes

```
<button class="btn-igave" data-igave-campaign="4" data-igave-token="2">Donate Ether</button>
```

The script will wire a click event listener to purchase the token identified by the campaign Id and token index. If web3/metamask is not installed the elements will instead be hidden.
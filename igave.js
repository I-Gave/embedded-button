(function() {
  'use strict';

  function igave() {
    this.init();
  }

  igave.prototype.init = function () {
    this.abi = [
      {
        'constant': false,
        'inputs': [
          {
            'name': '_campaignId',
            'type': 'uint128'
          },
          {
            'name': '_tokenIdx',
            'type': 'uint16'
          }
        ],
        'name': 'createCertificate',
        'outputs': [
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
      }
    ];

    var buttons = document.getElementsByClassName('btn-igave');

    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(web3.currentProvider);
    } else {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
      }
      return;
    }

    var w3 = this.web3;
    var abi = this.abi;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        var campaign = this.dataset.igaveCampaign;
        var token = this.dataset.igaveToken;
        var acct = w3.eth.accounts[0];
        var contract = w3.eth.contract(abi);
        // Current Private Testnet Address
        var instance = contract.at('0x8d80fe98e4b657a8b517e744b4c2a0e73d6a8977');
        instance.createCertificate(campaign, token, { from: acct, value: 100000000000000 }, (err, result) => {
          console.log(err);
          console.log(result);
        });
      });
    }
  };

  window.igave = new igave();
})();


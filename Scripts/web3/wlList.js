//import '/web3/merkletree';
//import './keccak256'

//import script from 'https://cdn.jsdelivr.net/npm/merkletreejs@latest/merkletree.js';  
document.write('<script src="https://cdn.jsdelivr.net/npm/merkletreejs@latest/merkletree.js"></script>');
//document.write("<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/keccak256@latest/keccak256.js'></script>");

let whiteListAddress = [
    "0xc1c3d3E04987A880Bf067cF7C3aB5Ef85043Dd08",
    "0xBA9A1eE9De4A8E1E42CB180F8a524A85fcF8Dd0a",
    "0x60D11E784bc8e69D37919373292629f85E310DC7",
    "0xA8904e87e314E50130D3d880e46a30CE4b39eAcF",
    "0xdda310BcD7717e0E30fEFCbb8B062711b88056c7"
      ];

function getHexProof(whiteAddress){
    
      const leafNodes = whiteListAddress.map(addr => window.keccak256(addr));
      
      const tree = new window.MerkleTree(leafNodes,window.keccak256,{sortPairs:true});
      
      const root = tree.getHexRoot()
      const leaf = '0xBA9A1eE9De4A8E1E42CB180F8a524A85fcF8Dd0a'
      const proof = tree.getHexProof(leaf)
      console.log(tree.verify(proof, leaf, root))
      
      let index = $.inArray(leaf, whiteListAddress);
      if(index == -1){
          alert("not wl");
      }
      alert("in wl");
      alert(tree.getHexProof(leafNodes[index]))
      alert(tree.verify(proof, leaf, root))
  }
  

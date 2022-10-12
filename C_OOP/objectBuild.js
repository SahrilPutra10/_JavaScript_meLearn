//Object Composition
const YourClassName = (paramA, paramB) => {
    const self = {
      paramA,
      paramB
    };
    
    const yourSpecificActions = self => ({
      specificActionA: { /** do action A **/},
    });
    
    return Object.assign(self, yourGenericAction(self), yourSpecificActions(self))
  }
  //cth diatas adalah membuat kumpulan attribute, generic method, dan spesific method menjadi satu objek.

//pendekatan dengan object compositon
// [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
  });

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
  });

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
  // [3] attributes
  const self = {
    from,
    message,
    store
  };
  // [4] method
  const personalEnterpriseBehaviors = self => ({
    createCatalog: () => console.log('Catalog has created: ', self.store)
  });
  
  // [5] create object composition
  return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@mee.com', 'hei', 'happy learning');
pe1.createCatalog(); //Catalog has created:  hei
pe1.sendMessage(); //send message: happy learning
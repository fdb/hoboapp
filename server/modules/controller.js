const MODULES = [
  {
    _id: 111,
    title: 'Home page',
    explanation:
      'Officiis nostrum voluptate, rem, voluptas officia accusamus aspernatur suscipit molestias in exercitationem, beatae recusandae aliquam sunt? Odio ullam consequuntur beatae aliquid itaque!',
    exercise:
      'Duis ultrices tincidunt ante, feugiat tempus lorem lacinia ut. Aliquam in ipsum ut orci sodales ullamcorper ut auctor ex. Suspendisse lacus ligula, dapibus non blandit ut, vestibulum ac risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec placerat congue turpis ac aliquam. Quisque mattis ultricies facilisis. Sed fermentum facilisis turpis, a dictum nunc. Curabitur vulputate quam ac ante auctor, id maximus dui bibendum. Aenean eget dui quis turpis rhoncus convallis. Vestibulum non magna cursus, egestas magna vel, vehicula lorem. Maecenas eget mauris commodo nunc hendrerit porta.',
    evaluation:
      'Cras pharetra magna sed sapien ornare facilisis in et libero. Integer tincidunt, nisl in vestibulum iaculis, nibh ante ullamcorper lorem, eget sagittis urna dolor ut ante. In mollis euismod augue sit amet suscipit. Quisque placerat ante non augue tempus porta. Aenean sed mauris venenatis, malesuada odio eu, commodo augue. Maecenas sollicitudin neque orci, et pellentesque lorem vestibulum et. Phasellus rhoncus pretium vestibulum.'
  },
  {
    _id: 222,
    title: 'Address bar',
    explanation:
      'Officiis nostrum voluptate, rem, voluptas officia accusamus aspernatur suscipit molestias in exercitationem, beatae recusandae aliquam sunt? Odio ullam consequuntur beatae aliquid itaque!',
    exercise:
      'Duis ultrices tincidunt ante, feugiat tempus lorem lacinia ut. Aliquam in ipsum ut orci sodales ullamcorper ut auctor ex. Suspendisse lacus ligula, dapibus non blandit ut, vestibulum ac risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec placerat congue turpis ac aliquam. Quisque mattis ultricies facilisis. Sed fermentum facilisis turpis, a dictum nunc. Curabitur vulputate quam ac ante auctor, id maximus dui bibendum. Aenean eget dui quis turpis rhoncus convallis. Vestibulum non magna cursus, egestas magna vel, vehicula lorem. Maecenas eget mauris commodo nunc hendrerit porta.',
    evaluation:
      'Cras pharetra magna sed sapien ornare facilisis in et libero. Integer tincidunt, nisl in vestibulum iaculis, nibh ante ullamcorper lorem, eget sagittis urna dolor ut ante. In mollis euismod augue sit amet suscipit. Quisque placerat ante non augue tempus porta. Aenean sed mauris venenatis, malesuada odio eu, commodo augue. Maecenas sollicitudin neque orci, et pellentesque lorem vestibulum et. Phasellus rhoncus pretium vestibulum.'
  },
  {
    _id: 333,
    title: 'Google results',
    explanation:
      'Officiis nostrum voluptate, rem, voluptas officia accusamus aspernatur suscipit molestias in exercitationem, beatae recusandae aliquam sunt? Odio ullam consequuntur beatae aliquid itaque!',
    exercise:
      'Duis ultrices tincidunt ante, feugiat tempus lorem lacinia ut. Aliquam in ipsum ut orci sodales ullamcorper ut auctor ex. Suspendisse lacus ligula, dapibus non blandit ut, vestibulum ac risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec placerat congue turpis ac aliquam. Quisque mattis ultricies facilisis. Sed fermentum facilisis turpis, a dictum nunc. Curabitur vulputate quam ac ante auctor, id maximus dui bibendum. Aenean eget dui quis turpis rhoncus convallis. Vestibulum non magna cursus, egestas magna vel, vehicula lorem. Maecenas eget mauris commodo nunc hendrerit porta.',
    evaluation:
      'Cras pharetra magna sed sapien ornare facilisis in et libero. Integer tincidunt, nisl in vestibulum iaculis, nibh ante ullamcorper lorem, eget sagittis urna dolor ut ante. In mollis euismod augue sit amet suscipit. Quisque placerat ante non augue tempus porta. Aenean sed mauris venenatis, malesuada odio eu, commodo augue. Maecenas sollicitudin neque orci, et pellentesque lorem vestibulum et. Phasellus rhoncus pretium vestibulum.'
  }
];

function getModules(req, res) {
  res.send(MODULES);
}

module.exports = { getModules };

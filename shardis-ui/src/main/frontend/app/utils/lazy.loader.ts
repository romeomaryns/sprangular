export enum LazyModule {
  ABOUT,
  PLAYGROUND,
  KITCHENSINK
}

export class LazyLoader {

  static lazyLoad(lazymodule:LazyModule):Promise<any> {

    var resolver = (resolve, reject) => {
      require.ensure([], (require) => {
        switch (lazymodule) {
          case LazyModule.ABOUT:
            resolve(require('../views/about/about.component.ts'));
            break;
          case LazyModule.PLAYGROUND:
            resolve(require('../views/playground/playground.component.ts'));
            break;
          case LazyModule.KITCHENSINK:
            resolve(require('../views/kitchensink/kitchensink.component.ts'));
            break;
        }
      });
    };

    return new Promise<any>(resolver);
  }
}

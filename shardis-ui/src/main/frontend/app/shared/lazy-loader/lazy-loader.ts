export enum LazyModule {
  ABOUT,
  PLAYGROUND
}

export class LazyLoader {

  static lazyLoad(lazymodule:LazyModule):Promise<any> {

    var resolver = (resolve, reject) => {
      require.ensure([], (require) => {
        switch (lazymodule) {
          case LazyModule.ABOUT:
            resolve(require('../../about'));
            break;
          case LazyModule.PLAYGROUND:
            resolve(require('../../playground'));
            break;
        }
      });
    };

    return new Promise<any>(resolver);
  }
}

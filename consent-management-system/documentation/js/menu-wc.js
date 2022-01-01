'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">consent-management-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a2cd61d9fdeb0b210bc2df6ad32c90f874d6b1bf861da4be1f8be79c46d340aa20b6c73e93852f58ce6e806ae0e6c926fb814068b8b996c4d488cc813ec255c5"' : 'data-target="#xs-components-links-module-AppModule-a2cd61d9fdeb0b210bc2df6ad32c90f874d6b1bf861da4be1f8be79c46d340aa20b6c73e93852f58ce6e806ae0e6c926fb814068b8b996c4d488cc813ec255c5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a2cd61d9fdeb0b210bc2df6ad32c90f874d6b1bf861da4be1f8be79c46d340aa20b6c73e93852f58ce6e806ae0e6c926fb814068b8b996c4d488cc813ec255c5"' :
                                            'id="xs-components-links-module-AppModule-a2cd61d9fdeb0b210bc2df6ad32c90f874d6b1bf861da4be1f8be79c46d340aa20b6c73e93852f58ce6e806ae0e6c926fb814068b8b996c4d488cc813ec255c5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a2cd61d9fdeb0b210bc2df6ad32c90f874d6b1bf861da4be1f8be79c46d340aa20b6c73e93852f58ce6e806ae0e6c926fb814068b8b996c4d488cc813ec255c5"' : 'data-target="#xs-injectables-links-module-AppModule-a2cd61d9fdeb0b210bc2df6ad32c90f874d6b1bf861da4be1f8be79c46d340aa20b6c73e93852f58ce6e806ae0e6c926fb814068b8b996c4d488cc813ec255c5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a2cd61d9fdeb0b210bc2df6ad32c90f874d6b1bf861da4be1f8be79c46d340aa20b6c73e93852f58ce6e806ae0e6c926fb814068b8b996c4d488cc813ec255c5"' :
                                        'id="xs-injectables-links-module-AppModule-a2cd61d9fdeb0b210bc2df6ad32c90f874d6b1bf861da4be1f8be79c46d340aa20b6c73e93852f58ce6e806ae0e6c926fb814068b8b996c4d488cc813ec255c5"' }>
                                        <li class="link">
                                            <a href="injectables/ConsentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConsentsModule.html" data-type="entity-link" >ConsentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConsentsModule-51a049e690bef7d1f3f950cf5f94ea09aa909e1337e7d86e51acdfc2ac287f5ddb3dff6f579205251ced84f90b0e65a45811985a27d403ca1a675d2639b94a65"' : 'data-target="#xs-components-links-module-ConsentsModule-51a049e690bef7d1f3f950cf5f94ea09aa909e1337e7d86e51acdfc2ac287f5ddb3dff6f579205251ced84f90b0e65a45811985a27d403ca1a675d2639b94a65"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConsentsModule-51a049e690bef7d1f3f950cf5f94ea09aa909e1337e7d86e51acdfc2ac287f5ddb3dff6f579205251ced84f90b0e65a45811985a27d403ca1a675d2639b94a65"' :
                                            'id="xs-components-links-module-ConsentsModule-51a049e690bef7d1f3f950cf5f94ea09aa909e1337e7d86e51acdfc2ac287f5ddb3dff6f579205251ced84f90b0e65a45811985a27d403ca1a675d2639b94a65"' }>
                                            <li class="link">
                                                <a href="components/GiveConsentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GiveConsentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListConsentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListConsentsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-339a63db4f8404e700fab92cbe5eca16e5935107497e24e1b192e969c1a4ce40657798a797b9c3a14f47c4575c78f38d116708b2ce878302173e35b198ac4b6a"' : 'data-target="#xs-components-links-module-CoreModule-339a63db4f8404e700fab92cbe5eca16e5935107497e24e1b192e969c1a4ce40657798a797b9c3a14f47c4575c78f38d116708b2ce878302173e35b198ac4b6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-339a63db4f8404e700fab92cbe5eca16e5935107497e24e1b192e969c1a4ce40657798a797b9c3a14f47c4575c78f38d116708b2ce878302173e35b198ac4b6a"' :
                                            'id="xs-components-links-module-CoreModule-339a63db4f8404e700fab92cbe5eca16e5935107497e24e1b192e969c1a4ce40657798a797b9c3a14f47c4575c78f38d116708b2ce878302173e35b198ac4b6a"' }>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ConsentsDTO.html" data-type="entity-link" >ConsentsDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ConsentsEffects.html" data-type="entity-link" >ConsentsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsentsService.html" data-type="entity-link" >ConsentsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/MockHttpInterceptor.html" data-type="entity-link" >MockHttpInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ConsentsState.html" data-type="entity-link" >ConsentsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link" >State</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
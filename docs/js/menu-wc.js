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
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' : 'data-bs-target="#xs-controllers-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' :
                                            'id="xs-controllers-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' : 'data-bs-target="#xs-injectables-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' :
                                        'id="xs-injectables-links-module-AppModule-1de7fc30dc56126e98f06b132a31a4ebe26018921562916ed6c0a41c2e94ef99f1f1643d977231a489eb5b8fc621b9e38d3a0855669abb336da585ed59993bc8"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' :
                                            'id="xs-controllers-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' :
                                        'id="xs-injectables-links-module-AuthModule-e27479e68ad5a729ccaeaf5736e32fdedc5c4bf8a8a8b2263578bb1922f214fcd2161994dc70269759cd780ce6e95e0b97665f2ccbf981d92cbad072a01b19c4"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' :
                                            'id="xs-controllers-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' :
                                        'id="xs-injectables-links-module-PostsModule-7456bb848e81cf80a48d62e13608680574730bd47e9b7a84b5aac39ea6500f748eac306169da8725863815623bcf16c02001e99334834ae6addc93d4500fa50d"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' :
                                            'id="xs-controllers-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' :
                                        'id="xs-injectables-links-module-UsersModule-62a1b5f9e730353d0ac18c0b8a0e0242cf0f27ef482a379c012d03d408136d52a15188134863793a2bd28af836dd938b2ab74f14955ac12616f2adae656c79de"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostsMetaOptionsDto.html" data-type="entity-link" >CreatePostsMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamDto.html" data-type="entity-link" >GetUserParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
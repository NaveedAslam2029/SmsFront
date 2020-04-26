(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js":
/*!************************************************************!*\
  !*** ./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js ***!
  \************************************************************/
/*! exports provided: RECAPTCHA_BASE_URL, RECAPTCHA_LANGUAGE, RECAPTCHA_NONCE, RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaComponent, RecaptchaFormsModule, RecaptchaLoaderService, RecaptchaModule, RecaptchaV3Module, RecaptchaValueAccessorDirective, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECAPTCHA_BASE_URL", function() { return RECAPTCHA_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECAPTCHA_LANGUAGE", function() { return RECAPTCHA_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECAPTCHA_NONCE", function() { return RECAPTCHA_NONCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECAPTCHA_SETTINGS", function() { return RECAPTCHA_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECAPTCHA_V3_SITE_KEY", function() { return RECAPTCHA_V3_SITE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function() { return ReCaptchaV3Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaComponent", function() { return RecaptchaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaFormsModule", function() { return RecaptchaFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaLoaderService", function() { return RecaptchaLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaModule", function() { return RecaptchaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaV3Module", function() { return RecaptchaV3Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaValueAccessorDirective", function() { return RecaptchaValueAccessorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RecaptchaCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const RECAPTCHA_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-language');
const RECAPTCHA_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-base-url');
const RECAPTCHA_NONCE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-nonce-tag');
function loadScript(renderMode, onLoaded, urlParams, url, nonce) {
    window.ng2recaptchaloaded = () => {
        onLoaded(grecaptcha);
    };
    const script = document.createElement('script');
    script.innerHTML = '';
    const baseUrl = url || 'https://www.google.com/recaptcha/api.js';
    script.src = `${baseUrl}?render=${renderMode}&onload=ng2recaptchaloaded${urlParams}`;
    if (nonce) {
        // tslint:disable-next-line:no-any Remove "any" cast once we upgrade Angular to 7 and TypeScript along with it
        script.nonce = nonce;
    }
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}
let RecaptchaLoaderService = RecaptchaLoaderService_1 = class RecaptchaLoaderService {
    constructor(
    // tslint:disable-next-line:no-any
    platformId, language, baseUrl, nonce) {
        this.platformId = platformId;
        this.language = language;
        this.baseUrl = baseUrl;
        this.nonce = nonce;
        this.init();
        this.ready = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) ? RecaptchaLoaderService_1.ready.asObservable() : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
    }
    /** @internal */
    init() {
        if (RecaptchaLoaderService_1.ready) {
            return;
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
            RecaptchaLoaderService_1.ready = subject;
            const langParam = this.language ? '&hl=' + this.language : '';
            loadScript('explicit', (grecaptcha) => subject.next(grecaptcha), langParam, this.baseUrl, this.nonce);
        }
    }
};
/**
 * @internal
 * @nocollapse
 */
RecaptchaLoaderService.ready = null;
RecaptchaLoaderService = RecaptchaLoaderService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_LANGUAGE)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_BASE_URL)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_NONCE)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, String, String, String])
], RecaptchaLoaderService);
var RecaptchaLoaderService_1;

const RECAPTCHA_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-settings');

let nextId = 0;
let RecaptchaComponent = class RecaptchaComponent {
    constructor(elementRef, loader, zone, settings) {
        this.elementRef = elementRef;
        this.loader = loader;
        this.zone = zone;
        this.id = `ngrecaptcha-${nextId++}`;
        this.resolved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (settings) {
            this.siteKey = settings.siteKey;
            this.theme = settings.theme;
            this.type = settings.type;
            this.size = settings.size;
            this.badge = settings.badge;
        }
    }
    ngAfterViewInit() {
        this.subscription = this.loader.ready.subscribe((grecaptcha) => {
            if (grecaptcha != null && grecaptcha.render instanceof Function) {
                this.grecaptcha = grecaptcha;
                this.renderRecaptcha();
            }
        });
    }
    ngOnDestroy() {
        // reset the captcha to ensure it does not leave anything behind
        // after the component is no longer needed
        this.grecaptchaReset();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * Executes the invisible recaptcha.
     * Does nothing if component's size is not set to "invisible".
     */
    execute() {
        if (this.size !== 'invisible') {
            return;
        }
        if (this.widget != null) {
            this.grecaptcha.execute(this.widget);
        }
        else {
            // delay execution of recaptcha until it actually renders
            this.executeRequested = true;
        }
    }
    reset() {
        if (this.widget != null) {
            if (this.grecaptcha.getResponse(this.widget)) {
                // Only emit an event in case if something would actually change.
                // That way we do not trigger "touching" of the control if someone does a "reset"
                // on a non-resolved captcha.
                this.resolved.emit(null);
            }
            this.grecaptchaReset();
        }
    }
    /** @internal */
    expired() {
        this.resolved.emit(null);
    }
    /** @internal */
    captchaResponseCallback(response) {
        this.resolved.emit(response);
    }
    /** @internal */
    grecaptchaReset() {
        if (this.widget != null) {
            this.zone.runOutsideAngular(() => this.grecaptcha.reset(this.widget));
        }
    }
    /** @internal */
    renderRecaptcha() {
        this.widget = this.grecaptcha.render(this.elementRef.nativeElement, {
            badge: this.badge,
            callback: (response) => {
                this.zone.run(() => this.captchaResponseCallback(response));
            },
            'expired-callback': () => {
                this.zone.run(() => this.expired());
            },
            sitekey: this.siteKey,
            size: this.size,
            tabindex: this.tabIndex,
            theme: this.theme,
            type: this.type,
        });
        if (this.executeRequested === true) {
            this.executeRequested = false;
            this.execute();
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RecaptchaComponent.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], RecaptchaComponent.prototype, "siteKey", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], RecaptchaComponent.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], RecaptchaComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], RecaptchaComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], RecaptchaComponent.prototype, "tabIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], RecaptchaComponent.prototype, "badge", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RecaptchaComponent.prototype, "resolved", void 0);
RecaptchaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        exportAs: 'reCaptcha',
        selector: 're-captcha',
        template: ``
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_SETTINGS)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        RecaptchaLoaderService,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object])
], RecaptchaComponent);

let RecaptchaCommonModule = class RecaptchaCommonModule {
};
RecaptchaCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            RecaptchaComponent,
        ],
        exports: [
            RecaptchaComponent,
        ],
    })
], RecaptchaCommonModule);

let RecaptchaModule = RecaptchaModule_1 = class RecaptchaModule {
    // We need this to maintain backwards-compatibility with v4. Removing this will be a breaking change
    static forRoot() {
        return RecaptchaModule_1;
    }
};
RecaptchaModule = RecaptchaModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            RecaptchaComponent,
        ],
        imports: [
            RecaptchaCommonModule,
        ],
        providers: [
            RecaptchaLoaderService,
        ],
    })
], RecaptchaModule);
var RecaptchaModule_1;

const RECAPTCHA_V3_SITE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-v3-site-key');
/**
 * The main service for working with reCAPTCHA v3 APIs.
 *
 * Use the `execute` method for executing a single action, and
 * `onExecute` observable for listening to all actions at once.
 */
let ReCaptchaV3Service = class ReCaptchaV3Service {
    constructor(zone, siteKey, 
    // tslint:disable-next-line:no-any
    platformId, baseUrl, nonce) {
        /** @internal */
        this.onLoadComplete = (grecaptcha) => {
            this.grecaptcha = grecaptcha;
            if (this.actionBacklog && this.actionBacklog.length > 0) {
                this.actionBacklog.forEach(([action, subject]) => this.executeActionWithSubject(action, subject));
                this.actionBacklog = undefined;
            }
        };
        this.zone = zone;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
        this.siteKey = siteKey;
        this.nonce = nonce;
        this.baseUrl = baseUrl;
        this.init();
    }
    get onExecute() {
        if (!this.onExecuteSubject) {
            this.onExecuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.onExecuteObservable = this.onExecuteSubject.asObservable();
        }
        return this.onExecuteObservable;
    }
    /**
     * Executes the provided `action` with reCAPTCHA v3 API.
     * Use the emitted token value for verification purposes on the backend.
     *
     * For more information about reCAPTCHA v3 actions and tokens refer to the official documentation at
     * https://developers.google.com/recaptcha/docs/v3.
     *
     * @param {string} action the action to execute
     * @returns {Observable<string>} an `Observable` that will emit the reCAPTCHA v3 string `token` value whenever ready.
     * The returned `Observable` completes immediately after emitting a value.
     */
    execute(action) {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        if (this.isBrowser) {
            if (!this.grecaptcha) {
                // todo: add to array of later executions
                if (!this.actionBacklog) {
                    this.actionBacklog = [];
                }
                this.actionBacklog.push([action, subject]);
            }
            else {
                this.executeActionWithSubject(action, subject);
            }
        }
        return subject.asObservable();
    }
    /** @internal */
    executeActionWithSubject(action, subject) {
        this.zone.runOutsideAngular(() => {
            // tslint:disable-next-line:no-any
            this.grecaptcha.execute(this.siteKey, { action }).then((token) => {
                this.zone.run(() => {
                    subject.next(token);
                    subject.complete();
                    if (this.onExecuteSubject) {
                        this.onExecuteSubject.next({ action, token });
                    }
                });
            });
        });
    }
    /** @internal */
    init() {
        if (this.isBrowser) {
            if ('grecaptcha' in window) {
                this.grecaptcha = grecaptcha;
            }
            else {
                loadScript(this.siteKey, this.onLoadComplete, '', this.baseUrl, this.nonce);
            }
        }
    }
};
ReCaptchaV3Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_V3_SITE_KEY)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_BASE_URL)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_NONCE)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], String, Object, String, String])
], ReCaptchaV3Service);

let RecaptchaV3Module = class RecaptchaV3Module {
};
RecaptchaV3Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            ReCaptchaV3Service,
        ],
    })
], RecaptchaV3Module);

let RecaptchaValueAccessorDirective = RecaptchaValueAccessorDirective_1 = class RecaptchaValueAccessorDirective {
    constructor(host) {
        this.host = host;
    }
    writeValue(value) {
        if (!value) {
            this.host.reset();
        }
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    onResolve($event) {
        if (this.onChange) {
            this.onChange($event);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('resolved', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], RecaptchaValueAccessorDirective.prototype, "onResolve", null);
RecaptchaValueAccessorDirective = RecaptchaValueAccessorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        providers: [
            {
                multi: true,
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                // tslint:disable-next-line:no-forward-ref
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => RecaptchaValueAccessorDirective_1),
            },
        ],
        // tslint:disable-next-line:directive-selector
        selector: 're-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [RecaptchaComponent])
], RecaptchaValueAccessorDirective);
var RecaptchaValueAccessorDirective_1;

let RecaptchaFormsModule = class RecaptchaFormsModule {
};
RecaptchaFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            RecaptchaValueAccessorDirective,
        ],
        exports: [RecaptchaValueAccessorDirective],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], RecaptchaCommonModule],
    })
], RecaptchaFormsModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-recaptcha.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/auth.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/auth.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-layout>\n  <nb-layout-column>\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation text-center\">\n          <a href=\"JavaScript:void(0);\">\n            <img src=\"assets/images/naveed.jpg\" height=\"40\" alt=\"\">\n          </a>\n        </nav>\n      </nb-card-header>\n      <nb-card-body>\n        <nb-auth-block>\n          <re-captcha #captchaRef=\"reCaptcha\"\n              (resolved)=\"$event && resolved($event)\" \n              siteKey=\"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI\"\n              size=\"invisible\" style=\"transform:scale(0.7);transform-origin:0;\"></re-captcha>\n          <router-outlet></router-outlet>\n        </nb-auth-block>\n      </nb-card-body>\n    </nb-card>\n  </nb-layout-column>\n</nb-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"title\" class=\"title\">Login</h1>\n<p class=\"sub-title\">Hello! Log in with your email or phone.</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error.message }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">You have successfully login</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email or Phone</label>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           name=\"email\"\n           id=\"input-email\"\n           pattern=\".+@.+\\..+\"\n           placeholder=\"Email or Phone\"\n           autofocus\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : ''\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Field is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\" for=\"input-password\">Password</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"../request-password\">Forgot Password?</a>\n    </span>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           name=\"password\"\n           type=\"password\"\n           id=\"input-password\"\n           pattern=\"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*()_+';.,?><:|}{]).{8,}$\"\n           placeholder=\"Password\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : ''\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"8\"\n           [maxlength]=\"16\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched \">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <!-- <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength ||password.invalid\">\n        Password must contain 8 to 16 characters & at least one lowercase and uppercase letter\n        & one special character\n      </p> -->\n    </ng-container>\n  </div>\n\n  <button type=\"button\"\n          nbButton\n          fullWidth\n          status=\"success\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\"\n          (click)=\"loginbtnClicked()\">\n    Log In\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  Don't have an account? <a class=\"text-link\" routerLink=\"../register\">Register</a>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/register/register.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/register/register.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-stepper #stepperRef orientation=\"horizontal\">\n   <nb-step label=\"Register through\">\n    <h1 id=\"title\" class=\"title\">Register through</h1>\n    <p class=\"sub-title\">Please select your prefered method of communication.</p>\n    <div class=\"row\">\n      <div class=\"col-6\">\n      <button nbButton            \n              fullWidth\n              status=\"primary\"\n              size=\"large\"\n              (click)=\"useEmailClick()\">\n              Email\n        </button>\n      </div>\n      <div class=\"col-6\">\n        <button nbButton\n                fullWidth\n                status=\"primary\"\n                size=\"large\"\n                (click)=\"usePhoneClick()\">\n                Phone\n        </button>\n      </div>\n    </div>\n  </nb-step>\n  <nb-step label=\"Register\">\n\n    <h1 id=\"title\" class=\"title\">Register</h1>\n\n    <nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n      <p class=\"alert-title\"><b>Oh snap!</b></p>\n      <ul class=\"alert-message-list\">\n        <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error.message }}</li>\n      </ul>\n    </nb-alert>\n\n    <nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n      <p class=\"alert-title\"><b>Hooray!</b></p>\n      <ul class=\"alert-message-list\">\n        <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message.message }}</li>\n      </ul>\n    </nb-alert>\n\n    <form  #form=\"ngForm\" aria-labelledby=\"title\">\n\n      <div class=\"form-group row\">\n        <label class=\"label col-sm-3 col-form-label\" for=\"input-name\">Full name</label>\n        <div class=\"col-sm-9\">\n          <input nbInput\n                 [(ngModel)]=\"user.fname\"\n                 #fullName=\"ngModel\"\n                 id=\"input-name\"\n                 name=\"fullName\"\n                 placeholder=\"Full name\"\n                 autofocus\n                 fullWidth\n                 [status]=\"fullName.dirty ? (fullName.invalid  ? 'danger' : 'success') : ''\"\n                 [required]=\"getConfigValue('forms.validation.fullName.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.fullName.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.fullName.maxLength')\"\n                 [attr.aria-invalid]=\"fullName.invalid && fullName.value ? true : null\" />\n\n          <ng-container *ngIf=\"fullName.invalid && fullName.touched\">\n            <span class=\"caption status-danger col\" *ngIf=\"fullName.errors?.required\">\n              Full name is required!\n            </span>\n            <span class=\"caption status-danger col\" *ngIf=\"fullName.errors?.minlength || fullName.errors?.maxlength\">\n              Full name should contains\n              from {{getConfigValue('forms.validation.fullName.minLength')}}\n              to {{getConfigValue('forms.validation.fullName.maxLength')}}\n              characters\n            </span>\n          </ng-container>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"label col-sm-3 col-form-label\" for=\"input-pic\">Profile picture</label>\n        <div class=\"col-sm-9\">\n          <input nbInput\n                 [(ngModel)]=\"user.image\"\n                 #picture=\"ngModel\"\n                 id=\"input-pic\"\n                 name=\"picture\"\n                 type=\"file\"\n                 autofocus\n                 fullWidth\n                 accept=\".png, .jpg, .jpeg\"\n                 [status]=\"picture.dirty ? (picture.invalid  ? 'danger' : 'success') : ''\"\n                 [required]=\"getConfigValue('forms.validation.picture.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.picture.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.picture.maxLength')\"\n                 [attr.aria-invalid]=\"picture.invalid && picture.touched ? true : null\">\n\n          <ng-container *ngIf=\"picture.invalid && picture.touched\">\n            <span class=\"caption status-danger col\" *ngIf=\"picture.errors?.required\">\n              Profile picture is required!\n            </span>\n          </ng-container>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" *ngIf=\"useEmail\">\n        <label class=\"label col-sm-3 col-form-label\" for=\"input-email\">Email address</label>\n        <div class=\"col-sm-9\">\n          <input nbInput\n                 [(ngModel)]=\"user.email\"\n                 #email=\"ngModel\"\n                 id=\"input-email\"\n                 name=\"email\"\n                 pattern=\".+@.+..+\"\n                 placeholder=\"Email address\"\n                 fullWidth\n                 [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : ''\"\n                 [required]=\"getConfigValue('forms.validation.email.required')\"\n                 [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n\n          <ng-container *ngIf=\"email.invalid && email.touched\">\n            <span class=\"caption status-danger col\" *ngIf=\"email.errors?.required\">\n              Email is required!\n            </span>\n            <span class=\"caption status-danger col\" *ngIf=\"email.errors?.pattern\">\n              Email should be the real one!\n            </span>\n          </ng-container>\n        </div>\n      </div>\n\n      <!-- <div class=\"form-group row\" *ngIf=\"!useEmail\">\n        <label class=\"label col-sm-3 col-form-label\" for=\"input-phone\">Phone number</label>\n        <div class=\"col-sm-9\">\n          <ngx-intl-tel-input [(ngModel)]=\"user.phoneNumber\"\n                              #phone=\"ngModel\"\n                              id=\"input-phone\"\n                              name=\"phone\"\n                              [cssClass]=\"'register-input-phone'\"\n                              [enableAutoCountrySelect]=\"false\"\n                              [enablePlaceholder]=\"true\"\n                              [searchCountryFlag]=\"true\"\n                              [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\n                              [selectFirstCountry]=\"false\"\n                              [selectedCountryISO]=\"CountryISO.UnitedStates\"\n                              [maxLength]=\"15\"\n                              [tooltipField]=\"TooltipLabel.Name\"\n                              [phoneValidation]=\"true\"\n                              [separateDialCode]=\"true\"\n                              [required]=\"true\"\n                              [attr.aria-invalid]=\"phone.invalid && phone.touched ? true : null\">\n\n            <ng-container *ngIf=\"phone.invalid && phone.touched\">\n              <span class=\"caption status-danger col\" *ngIf=\"phone.errors?.required\">\n                Phone is required!\n              </span>\n              <p class=\"caption status-danger col\" *ngIf=\"!phone.errors?.required\">\n                Phone should be the real one!\n              </p>\n            </ng-container>\n          </ngx-intl-tel-input>\n        </div>\n      </div> -->\n\n      <div class=\"form-group row\">\n        <label class=\"label col-sm-3 col-form-label\" for=\"input-password\">Password</label>\n        <div class=\"col-sm-9\">\n          <input nbInput\n                 [(ngModel)]=\"user.password\"\n                 #password=\"ngModel\"\n                 type=\"password\"\n                 id=\"input-password\"\n                 name=\"password\"\n                 placeholder=\"Password\"\n                 pattern=\"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*()_+';.,?><:|}{]).{8,}$\"\n                 fullWidth\n                 [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : ''\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n                 [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n\n          <ng-container *ngIf=\"password.invalid && password.touched\">\n            <span class=\"caption status-danger col\" *ngIf=\"password.errors?.required\">\n              Password is required!\n            </span>\n            <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength ||password.invalid\">\n              Password must contain 8 to 16 characters & at least one lowercase and uppercase letter\n              & one special character\n            </p>\n          </ng-container>\n        </div> \n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"label col-sm-3 col-form-label\" for=\"input-re-password\">Repeat password</label>\n        <div class=\"col-sm-9\">\n          <input nbInput\n                 [(ngModel)]=\"user.password\"\n                 #rePass=\"ngModel\"\n                 type=\"password\"\n                 id=\"input-re-password\"\n                 name=\"rePass\"\n                 placeholder=\"Confirm Password\"\n                 fullWidth\n                 [status]=\"rePass.dirty ? (rePass.invalid || password.value != rePass.value  ? 'danger' : 'success') : ''\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n\n          <ng-container *ngIf=\"rePass.touched\">\n            <p class=\"caption status-danger\" *ngIf=\"rePass.invalid && rePass.errors?.required\">\n              Password confirmation is required!\n            </p>\n            <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n              Password does not match the confirm password.\n            </p>\n          </ng-container>\n        </div>\n        \n      </div>\n\n      <button nbButton\n              fullWidth\n              status=\"primary\"\n              size=\"large\" \n              [disabled]=\"submitted || !form.valid || password.value != rePass.value || fullName.value == null || fullName.value == ''\"\n              [class.btn-pulse]=\"submitted\"\n              (click)=\"registerbtnClicked()\">\n        Register\n      </button>\n    </form>\n\n    <section class=\"another-action\" aria-label=\"Sign in\">\n      Already have an account? <a class=\"text-link\" routerLink=\"../login\">Log in</a>\n    </section>\n\n  </nb-step>\n</nb-stepper>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/request-password/request-password.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/request-password/request-password.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"title\" class=\"title\">Forgot Password</h1>\n<p class=\"sub-title\">Enter your email or phone and we’ll send a code to reset your password</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"requestPass()\" #requestPassForm=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">    \n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           placeholder=\"Email address or Phone number\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : ''\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Field is required!\n      </p>\n    </ng-container>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !requestPassForm.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Request password\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p>\n  <p><a routerLink=\"../register\" class=\"text-link\">Register</a></p>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/reset-password/reset-password.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/reset-password/reset-password.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"title\" class=\"title\">Change password</h1>\n<p class=\"sub-title\">Please set a new password</p>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">New Password</label>\n    <input nbInput\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           type=\"password\"\n           id=\"input-password\"\n           name=\"password\"\n           class=\"first\"\n           placeholder=\"New Password\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : ''\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contains\n        from {{getConfigValue('forms.validation.password.minLength')}}\n        to {{getConfigValue('forms.validation.password.maxLength')}}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"label\" for=\"input-re-password\">Confirm Password</label>\n    <input nbInput\n           [(ngModel)]=\"user.confirmPassword\"\n           #rePass=\"ngModel\"\n           id=\"input-re-password\"\n           name=\"rePass\"\n           type=\"password\"\n           class=\"last\"\n           placeholder=\"Confirm Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"rePass.touched\n               ? (rePass.invalid || password.value != rePass.value ? 'danger' : 'success')\n               : ''\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n    <ng-container *ngIf=\"rePass.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"rePass.invalid && rePass.errors?.required\">\n        Password confirmation is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </p>\n    </ng-container>\n  </div>\n\n  <button nbButton\n          status=\"primary\"\n          fullWidth\n          size=\"large\"\n          [disabled]=\"submitted || !resetPassForm.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Change password\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p>\n  <p><a class=\"text-link\" routerLink=\"../register\">Register</a></p>\n</section>\n");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: routes, AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _components_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth.component */ "./src/app/auth/components/auth.component.ts");
/* harmony import */ var _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/request-password/request-password.component */ "./src/app/auth/components/request-password/request-password.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/auth/components/reset-password/reset-password.component.ts");









const routes = [
    {
        path: '',
        component: _components_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
        children: [
            // should we default to login? But it creates problem with links e.g. /auth/request-password becomes only /request-password
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            },
            // {
            //   path: 'login',
            //   component: LoginComponent,
            // },
            {
                path: 'register',
                component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
            },
            {
                path: 'logout',
                component: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbLogoutComponent"],
            },
            {
                path: 'request-password',
                component: _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_7__["RequestPasswordComponent"],
            },
            {
                path: 'reset-password',
                component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"],
            },
        ],
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _components_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth.component */ "./src/app/auth/components/auth.component.ts");
/* harmony import */ var _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/request-password/request-password.component */ "./src/app/auth/components/request-password/request-password.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/auth/components/reset-password/reset-password.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/recaptcha.service */ "./src/app/auth/services/recaptcha.service.ts");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm2015/ngx-intl-tel-input.js");

















// if you need forms support:
// import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAlertModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbAuthModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_14__["RecaptchaModule"],
            ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__["NgxIntlTelInputModule"],
        ],
        declarations: [
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _components_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
            _components_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_12__["RequestPasswordComponent"],
            _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"],
        ],
        providers: [
            _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_15__["RecaptchaService"],
        ],
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/components/auth.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/auth/components/auth.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:-webkit-box;display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AbmVidWxhci9hdXRoL2NvbXBvbmVudHMvYXV0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUUsQ0FBQyxjQUFjLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQyx3QkFBd0Isb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsZ0NBQWdDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsZ0JBQWdCLENBQUMsbUJBQW1CLG1CQUFZLENBQVosWUFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsV0FBVyxDQUFDLDZCQUE2QixjQUFjLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyx1RkFBdUYsY0FBYyxDQUFDLDZCQUE2Qix1RkFBdUYsU0FBUyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovOmhvc3QgbmItY2FyZHttYXJnaW46MDtoZWlnaHQ6Y2FsYygxMDB2aCAtIDIgKiAyLjVyZW0pfTpob3N0IC5uYXZpZ2F0aW9uIC5saW5re2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lfTpob3N0IC5uYXZpZ2F0aW9uIC5saW5rIG5iLWljb257Zm9udC1zaXplOjJyZW07dmVydGljYWwtYWxpZ246bWlkZGxlfTpob3N0IC5saW5rcyBuYi1pY29ue2ZvbnQtc2l6ZToyLjVyZW19Omhvc3QgbmItY2FyZC1ib2R5e2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlfTpob3N0IG5iLWF1dGgtYmxvY2t7bWFyZ2luOmF1dG99QG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KXs6aG9zdCBuYi1jYXJke2JvcmRlci1yYWRpdXM6MDtoZWlnaHQ6MTAwdmh9fTpob3N0IDo6bmctZGVlcCBuYi1sYXlvdXQgLmxheW91dCAubGF5b3V0LWNvbnRhaW5lciAuY29udGVudCAuY29sdW1ucyBuYi1sYXlvdXQtY29sdW1ue3BhZGRpbmc6Mi41cmVtfUBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCl7Omhvc3QgOjpuZy1kZWVwIG5iLWxheW91dCAubGF5b3V0IC5sYXlvdXQtY29udGFpbmVyIC5jb250ZW50IC5jb2x1bW5zIG5iLWxheW91dC1jb2x1bW57cGFkZGluZzowfX1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/auth/components/auth.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/components/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/recaptcha.service */ "./src/app/auth/services/recaptcha.service.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");






let AuthComponent = class AuthComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthComponent"] {
    constructor(auth, location, reacptchaService) {
        super(auth, location);
        this.auth = auth;
        this.location = location;
        this.reacptchaService = reacptchaService;
        reacptchaService.executeRecaptcha.subscribe(() => {
            this.captchaRef.execute();
        });
    }
    resolved(captchaResponse) {
        this.reacptchaService.recaptchaResolved.next(captchaResponse);
        this.captchaRef.reset();
    }
    ngOnInit() {
    }
};
AuthComponent.ctorParameters = () => [
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__["RecaptchaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('captchaRef', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaComponent"])
], AuthComponent.prototype, "captchaRef", void 0);
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'epv-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/components/auth.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__["RecaptchaService"]])
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recaptcha.service */ "./src/app/auth/services/recaptcha.service.ts");





let LoginComponent = class LoginComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbLoginComponent"] {
    constructor(service, options = {}, cd, router, recaptchaService) {
        super(service, options, cd, router);
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.recaptchaService = recaptchaService;
        this.recaptchaResolvedSubscription = recaptchaService.recaptchaResolved.subscribe((captchaResponse) => {
            this.resolved(captchaResponse);
        });
    }
    loginbtnClicked() {
        this.recaptchaService.executeRecaptcha.next();
    }
    resolved(captchaResponse) {
        this.user.googleReCaptchaResponse = captchaResponse;
        this.login();
    }
    ngOnDestroy() {
        this.recaptchaResolvedSubscription.unsubscribe();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__["RecaptchaService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'epv-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__["RecaptchaService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/components/register/register.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .title{margin-bottom:2rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AbmVidWxhci9hdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC50aXRsZXttYXJnaW4tYm90dG9tOjJyZW19XG4iXX0= */");

/***/ }),

/***/ "./src/app/auth/components/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recaptcha.service */ "./src/app/auth/services/recaptcha.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm2015/ngx-intl-tel-input.js");







let RegisterComponent = class RegisterComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbRegisterComponent"] {
    // preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
    constructor(service, options = {}, cd, router, recaptchaService) {
        super(service, options, cd, router);
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.recaptchaService = recaptchaService;
        this.radioGroupValue = 1;
        this.useEmail = true;
        this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["SearchCountryField"];
        this.TooltipLabel = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["TooltipLabel"];
        this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["CountryISO"];
        this.recaptchaResolvedSubscription = recaptchaService.recaptchaResolved.subscribe((captchaResponse) => {
            this.resolved(captchaResponse);
        });
    }
    useEmailClick() {
        this.useEmail = true;
        this.user.signupBy = "Email";
        this.stepperRef.next();
    }
    usePhoneClick() {
        this.useEmail = false;
        this.user.signupBy = "PhoneNumber";
        this.stepperRef.next();
    }
    resolved(captchaResponse) {
        //  this.user.googleReCaptchaResponse = captchaResponse;
        if (this.useEmail === false) {
            this.user.phoneNumber = this.user.phoneNumber.internationalNumber;
        }
        this.register();
    }
    registerbtnClicked() {
        this.recaptchaService.executeRecaptcha.next();
    }
    ngOnDestroy() {
        this.recaptchaResolvedSubscription.unsubscribe();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__["RecaptchaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepperRef', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperComponent"])
], RegisterComponent.prototype, "stepperRef", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'epv-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/components/register/register.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__["RecaptchaService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/auth/components/request-password/request-password.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/components/request-password/request-password.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .form-group:last-of-type{margin-bottom:3rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AbmVidWxhci9hdXRoL2NvbXBvbmVudHMvcmVxdWVzdC1wYXNzd29yZC9yZXF1ZXN0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQStCLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9yZXF1ZXN0LXBhc3N3b3JkL3JlcXVlc3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAuZm9ybS1ncm91cDpsYXN0LW9mLXR5cGV7bWFyZ2luLWJvdHRvbTozcmVtfVxuIl19 */");

/***/ }),

/***/ "./src/app/auth/components/request-password/request-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/auth/components/request-password/request-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: RequestPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPasswordComponent", function() { return RequestPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");



let RequestPasswordComponent = class RequestPasswordComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbRequestPasswordComponent"] {
    ngOnInit() {
    }
};
RequestPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'epv-request-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/request-password/request-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request-password.component.scss */ "./src/app/auth/components/request-password/request-password.component.scss")).default]
    })
], RequestPasswordComponent);



/***/ }),

/***/ "./src/app/auth/components/reset-password/reset-password.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/auth/components/reset-password/reset-password.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .form-group:last-of-type{margin-bottom:3rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AbmVidWxhci9hdXRoL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0Isa0JBQWtCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgLmZvcm0tZ3JvdXA6bGFzdC1vZi10eXBle21hcmdpbi1ib3R0b206M3JlbX1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/auth/components/reset-password/reset-password.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/auth/components/reset-password/reset-password.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");



let ResetPasswordComponent = class ResetPasswordComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbResetPasswordComponent"] {
    ngOnInit() {
    }
};
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'epv-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/auth/components/reset-password/reset-password.component.scss")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/auth/services/recaptcha.service.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/services/recaptcha.service.ts ***!
  \****************************************************/
/*! exports provided: RecaptchaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaService", function() { return RecaptchaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let RecaptchaService = class RecaptchaService {
    constructor() {
        this.executeRecaptcha = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.recaptchaResolved = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
};
RecaptchaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], RecaptchaService);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map
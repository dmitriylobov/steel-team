(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{s7LF:function(t,e,n){"use strict";n.d(e,"p",(function(){return lt})),n.d(e,"s",(function(){return tt})),n.d(e,"q",(function(){return O})),n.d(e,"r",(function(){return et})),n.d(e,"b",(function(){return d})),n.d(e,"h",(function(){return l})),n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return u})),n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return _})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return Q})),n.d(e,"f",(function(){return ot})),n.d(e,"g",(function(){return nt})),n.d(e,"n",(function(){return at})),n.d(e,"d",(function(){return ht})),n.d(e,"e",(function(){return Y})),n.d(e,"o",(function(){return C})),n.d(e,"m",(function(){return ut}));var r=n("8Y7J"),i=n("cUpR"),s=n("cp0P"),o=n("Cfvw"),a=n("lJxs");const l=new r.InjectionToken("NgValueAccessor"),h=new r.InjectionToken("CompositionEventMode");class u{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(i.r)()?Object(i.r)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}class c{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class d extends c{get formDirective(){return null}get path(){return null}}function p(){throw new Error("unimplemented")}class m extends c{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null,this._rawValidators=[],this._rawAsyncValidators=[]}get validator(){return p()}get asyncValidator(){return p()}}class g{constructor(t){this._cd=t}get ngClassUntouched(){return!!this._cd.control&&this._cd.control.untouched}get ngClassTouched(){return!!this._cd.control&&this._cd.control.touched}get ngClassPristine(){return!!this._cd.control&&this._cd.control.pristine}get ngClassDirty(){return!!this._cd.control&&this._cd.control.dirty}get ngClassValid(){return!!this._cd.control&&this._cd.control.valid}get ngClassInvalid(){return!!this._cd.control&&this._cd.control.invalid}get ngClassPending(){return!!this._cd.control&&this._cd.control.pending}}class _ extends g{constructor(t){super(t)}}class f extends g{constructor(t){super(t)}}function y(t){return null==t||0===t.length}const v=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class C{static min(t){return e=>{if(y(e.value)||y(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(y(e.value)||y(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}static required(t){return y(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return y(t.value)?null:v.test(t.value)?null:{email:!0}}static minLength(t){return e=>{if(y(e.value))return null;const n=e.value?e.value.length:0;return n<t?{minlength:{requiredLength:t,actualLength:n}}:null}}static maxLength(t){return e=>{const n=e.value?e.value.length:0;return n>t?{maxlength:{requiredLength:t,actualLength:n}}:null}}static pattern(t){if(!t)return C.nullValidator;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(y(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(V);return 0==e.length?null:function(t){return b(function(t,e){return e.map(e=>e(t))}(t,e))}}static composeAsync(t){if(!t)return null;const e=t.filter(V);return 0==e.length?null:function(t){const n=function(t,e){return e.map(e=>e(t))}(t,e).map(w);return Object(s.a)(n).pipe(Object(a.a)(b))}}}function V(t){return null!=t}function w(t){const e=Object(r["\u0275isPromise"])(t)?Object(o.a)(t):t;if(!Object(r["\u0275isObservable"])(e))throw new Error("Expected validator to return Promise or Observable.");return e}function b(t){const e=t.reduce((t,e)=>null!=e?Object.assign({},t,e):t,{});return 0===Object.keys(e).length?null:e}function E(t){return t.validate?e=>t.validate(e):t}function A(t){return t.validate?e=>t.validate(e):t}class O{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}const S={formControlName:'\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',formGroupName:'\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',formArrayName:'\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',ngModelGroup:'\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',ngModelWithFormGroup:'\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '};class M{static controlParentException(){throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${S.formControlName}`)}static ngModelGroupException(){throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${S.formGroupName}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ${S.ngModelGroup}`)}static missingFormException(){throw new Error(`formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ${S.formControlName}`)}static groupParentException(){throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${S.formGroupName}`)}static arrayParentException(){throw new Error(`formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ${S.formArrayName}`)}static disabledAttrWarning(){console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")}static ngModelWarning(t){console.warn(`\n    It looks like you're using ngModel on the same form field as ${t}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${"formControl"===t?"FormControlDirective":"FormControlName"}#use-with-ngmodel\n    `)}}function D(t,e){return[...e.path,t]}function k(t,e){t||N(e,"Cannot find control with"),e.valueAccessor||N(e,"No value accessor for form control with"),t.validator=C.compose([t.validator,e.validator]),t.asyncValidator=C.composeAsync([t.asyncValidator,e.asyncValidator]),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&P(t,e)})}(t,e),function(t,e){t.registerOnChange((t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&P(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),e.valueAccessor.setDisabledState&&t.registerOnDisabledChange(t=>{e.valueAccessor.setDisabledState(t)}),e._rawValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(()=>t.updateValueAndValidity())}),e._rawAsyncValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(()=>t.updateValueAndValidity())})}function P(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function T(t,e){null==t&&N(e,"Cannot find control with"),t.validator=C.compose([t.validator,e.validator]),t.asyncValidator=C.composeAsync([t.asyncValidator,e.asyncValidator])}function F(t){return N(t,"There is no FormControl instance attached to form control element with")}function N(t,e){let n;throw n=t.path.length>1?`path: '${t.path.join(" -> ")}'`:t.path[0]?`name: '${t.path}'`:"unspecified name attribute",new Error(`${e} ${n}`)}function x(t){return null!=t?C.compose(t.map(E)):null}function G(t){return null!=t?C.composeAsync(t.map(A)):null}const I=[class{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"checked",t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}},class{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(t))}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}},class{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}},class{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=r["\u0275looseIdentical"]}set compareWith(t){if("function"!=typeof t)throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=function(t,e){return null==t?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}},class{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=r["\u0275looseIdentical"]}set compareWith(t){if("function"!=typeof t)throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(e.hasOwnProperty("selectedOptions")){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const r=t.item(e),i=this._getOptionValue(r.value);n.push(i)}}else{const t=e.options;for(let e=0;e<t.length;e++){const r=t.item(e);if(r.selected){const t=this._getOptionValue(r.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}},class{constructor(t,e,n,r){this._renderer=t,this._elementRef=e,this._registry=n,this._injector=r,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(m),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}fireUncheck(t){this.writeValue(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this._throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}_throwNameError(){throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')}}];function j(t,e){t._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function R(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const $="VALID",W="INVALID",U="PENDING",q="DISABLED";function L(t){const e=Z(t)?t.validators:t;return Array.isArray(e)?x(e):e||null}function z(t,e){const n=Z(e)?e.asyncValidators:t;return Array.isArray(n)?G(n):n||null}function Z(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class J{constructor(t,e){this.validator=t,this.asyncValidator=e,this._onCollectionChange=()=>{},this.pristine=!0,this.touched=!1,this._onDisabledChange=[]}get parent(){return this._parent}get valid(){return this.status===$}get invalid(){return this.status===W}get pending(){return this.status==U}get disabled(){return this.status===q}get enabled(){return this.status!==q}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this.validator=L(t)}setAsyncValidators(t){this.asyncValidator=z(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=U,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=q,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign({},t,{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign({},t,{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=$,this._forEachChild(e=>{e.enable(Object.assign({},t,{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign({},t,{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==$&&this.status!==U||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?q:$}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=U;const e=w(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>this.setErrors(e,{emitEvent:t}))}}_cancelExistingSubscription(){this._asyncValidationSubscription&&this._asyncValidationSubscription.unsubscribe()}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){return null==e?null:(e instanceof Array||(e=e.split(".")),e instanceof Array&&0===e.length?null:e.reduce((t,e)=>t instanceof B?t.controls.hasOwnProperty(e)?t.controls[e]:null:t instanceof H&&t.at(e)||null,t))}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.EventEmitter,this.statusChanges=new r.EventEmitter}_calculateStatus(){return this._allControlsDisabled()?q:this.errors?W:this._anyControlsHaveStatus(U)?U:this._anyControlsHaveStatus(W)?W:$}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Z(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&this._parent&&this._parent.dirty&&!this._parent._anyControlsDirty()}}class Y extends J{constructor(t=null,e,n){super(L(e),z(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),this._initObservables()}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_clearChangeFns(){this._onChange=[],this._onDisabledChange=[],this._onCollectionChange=()=>{}}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class B extends J{constructor(t,e,n){super(L(e),z(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof Y?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>t(this.controls[e],e))}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){let e=!1;return this._forEachChild((n,r)=>{e=e||this.contains(r)&&t(n)}),e}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class H extends J{constructor(t,e,n){super(L(e),z(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof Y?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const K=(()=>Promise.resolve(null))();class Q extends d{constructor(t,e){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new r.EventEmitter,this.form=new B({},x(t),G(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){K.then(()=>{const e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),k(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){K.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name),R(this._directives,t)})}addFormGroup(t){K.then(()=>{const e=this._findContainer(t.path),n=new B({});T(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){K.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){K.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,j(this.form,this._directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}class X extends d{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return D(this.name,this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return x(this._validators)}get asyncValidator(){return G(this._asyncValidators)}_checkParentType(){}}class tt{}const et=new r.InjectionToken("NgModelWithFormControlWarning");class nt extends d{constructor(t,e){super(),this._validators=t,this._asyncValidators=e,this.submitted=!1,this.directives=[],this.form=null,this.ngSubmit=new r.EventEmitter}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations())}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const e=this.form.get(t.path);return k(e,t),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){R(this.directives,t)}addFormGroup(t){const e=this.form.get(t.path);T(e,t),e.updateValueAndValidity({emitEvent:!1})}removeFormGroup(t){}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){const e=this.form.get(t.path);T(e,t),e.updateValueAndValidity({emitEvent:!1})}removeFormArray(t){}getFormArray(t){return this.form.get(t.path)}updateModel(t,e){this.form.get(t.path).setValue(e)}onSubmit(t){return this.submitted=!0,j(this.form,this.directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const e=this.form.get(t.path);t.control!==e&&(function(t,e){e.valueAccessor.registerOnChange(()=>F(e)),e.valueAccessor.registerOnTouched(()=>F(e)),e._rawValidators.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(null)}),e._rawAsyncValidators.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(null)}),t&&t._clearChangeFns()}(t.control,t),e&&k(e,t),t.control=e)}),this.form._updateTreeValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(()=>this._updateDomValue()),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{}),this._oldForm=this.form}_updateValidators(){const t=x(this._validators);this.form.validator=C.compose([this.form.validator,t]);const e=G(this._asyncValidators);this.form.asyncValidator=C.composeAsync([this.form.asyncValidator,e])}_checkFormPresent(){this.form||M.missingFormException()}}class rt extends X{constructor(t,e,n){super(),this._parent=t,this._validators=e,this._asyncValidators=n}_checkParentType(){st(this._parent)&&M.groupParentException()}}class it extends d{constructor(t,e,n){super(),this._parent=t,this._validators=e,this._asyncValidators=n}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return D(this.name,this._parent)}get validator(){return x(this._validators)}get asyncValidator(){return G(this._asyncValidators)}_checkParentType(){st(this._parent)&&M.arrayParentException()}}function st(t){return!(t instanceof rt||t instanceof nt||t instanceof it)}let ot=(()=>{class t extends m{constructor(t,e,n,i,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.update=new r.EventEmitter,this._ngModelWarningSent=!1,this._parent=t,this._rawValidators=e||[],this._rawAsyncValidators=n||[],this.valueAccessor=function(t,e){if(!e)return null;Array.isArray(e)||N(t,"Value accessor was not provided as an array for form control with");let n=void 0,r=void 0,i=void 0;return e.forEach(e=>{e.constructor===u?n=e:function(t){return I.some(e=>t.constructor===e)}(e)?(r&&N(t,"More than one built-in value accessor matches form control with"),r=e):(i&&N(t,"More than one custom value accessor matches form control with"),i=e)}),i||r||n||(N(t,"No valid value accessor for form control with"),null)}(this,i)}set isDisabled(t){M.disabledAttrWarning()}ngOnChanges(e){var n,i;this._added||this._setUpControl(),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object(r["\u0275looseIdentical"])(e,n.currentValue)}(e,this.viewModel)&&("formControlName",n=t,this,i=this._ngModelWarningConfig,Object(r.isDevMode)()&&"never"!==i&&((null!==i&&"once"!==i||n._ngModelWarningSentOnce)&&("always"!==i||this._ngModelWarningSent)||(M.ngModelWarning("formControlName"),n._ngModelWarningSentOnce=!0,this._ngModelWarningSent=!0)),this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return D(this.name,this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return x(this._rawValidators)}get asyncValidator(){return G(this._rawAsyncValidators)}_checkParentType(){!(this._parent instanceof rt)&&this._parent instanceof X?M.ngModelGroupException():this._parent instanceof rt||this._parent instanceof nt||this._parent instanceof it||M.controlParentException()}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return t._ngModelWarningSentOnce=!1,t})();class at{get required(){return this._required}set required(t){this._required=null!=t&&!1!==t&&"false"!==`${t}`,this._onChange&&this._onChange()}validate(t){return this.required?C.required(t):null}registerOnValidatorChange(t){this._onChange=t}}class lt{}class ht{group(t,e=null){const n=this._reduceControls(t);let r=null,i=null,s=void 0;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(r=null!=e.validators?e.validators:null,i=null!=e.asyncValidators?e.asyncValidators:null,s=null!=e.updateOn?e.updateOn:void 0):(r=null!=e.validator?e.validator:null,i=null!=e.asyncValidator?e.asyncValidator:null)),new B(n,{asyncValidators:i,updateOn:s,validators:r})}control(t,e,n){return new Y(t,e,n)}array(t,e,n){const r=t.map(t=>this._createControl(t));return new H(r,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof Y||t instanceof B||t instanceof H?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}class ut{static withConfig(t){return{ngModule:ut,providers:[{provide:et,useValue:t.warnOnNgModelWithFormControl}]}}}}}]);
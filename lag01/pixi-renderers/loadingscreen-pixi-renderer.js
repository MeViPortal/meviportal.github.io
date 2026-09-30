//#var gdjs;(function(p){let a;(function(r){r[r.NOT_STARTED=0]="NOT_STARTED",r[r.STARTED=1]="STARTED",r[r.FINISHED=2]="FINISHED"})(a||(a={}));const d=(n,e,i)=>{!n||(e>0?(n.alpha+=1/e*i/1e3,n.alpha>1&&(n.alpha=1)):n.alpha=1)},_=n=>!n||n.alpha>=1;class c{constructor(e,i,r,t,s){this._backgroundSprite=null;this._gdevelopLogoSprite=null;this._progressBarGraphics=null;this._state=0;this._startTimeInMs=0;this._backgroundReadyTimeInMs=0;this._lastFrameTimeInMs=0;this._progressPercent=0;if(this._loadingScreenData=r,this._isWatermarkEnabled=t,this._isFirstLayout=s,this._loadingScreenContainer=new PIXI.Container,this._pixiRenderer=e.getPIXIRenderer(),!this._pixiRenderer)return;const o=i.getOrLoadPIXITexture(r.backgroundImageResourceName);o!==i.getInvalidPIXITexture()&&(this._backgroundSprite=PIXI.Sprite.from(o),this._backgroundSprite.alpha=0,this._backgroundSprite.anchor.x=.5,this._backgroundSprite.anchor.y=.5,this._loadingScreenContainer.addChild(this._backgroundSprite)),r.showGDevelopSplash&&s&&(this._gdevelopLogoSprite=PIXI.Sprite.from(p.gdevelopLogo),this._gdevelopLogoSprite.alpha=0,this._gdevelopLogoSprite.anchor.x=.5,this._gdevelopLogoSprite.anchor.y=.5,this._loadingScreenContainer.addChild(this._gdevelopLogoSprite)),r.showProgressBar&&(this._progressBarGraphics=new PIXI.Graphics,this._progressBarGraphics.alpha=0,this._loadingScreenContainer.addChild(this._progressBarGraphics)),this._render(performance.now())}setPercent(e){this._progressPercent=e}_startLoadingScreen(){!this._pixiRenderer||(this._state=1,this._startTimeInMs=performance.now())}_updatePositions(){if(!!this._pixiRenderer){if(this._backgroundSprite&&this._backgroundSprite.texture.valid){this._backgroundSprite.position.x=this._pixiRenderer.width/2,this._backgroundSprite.position.y=this._pixiRenderer.height/2;const e=Math.max(this._pixiRenderer.width/this._backgroundSprite.texture.width,this._pixiRenderer.height/this._backgroundSprite.texture.height);this._backgroundSprite.scale.x=e,this._backgroundSprite.scale.y=e}if(this._gdevelopLogoSprite){this._gdevelopLogoSprite.position.x=this._pixiRenderer.width/2,this._gdevelopLogoSprite.position.y=this._pixiRenderer.height/2;const e=680,i=this._pixiRenderer.width>this._pixiRenderer.height&&this._pixiRenderer.width>500?150:35,t=Math.min(e,Math.max(1,this._pixiRenderer.width-i*2))/e;this._gdevelopLogoSprite.scale.x=t,this._gdevelopLogoSprite.scale.y=t,this._gdevelopLogoSprite.visible=this._pixiRenderer.width>200&&this._pixiRenderer.height>200}}}_render(e){!this._pixiRenderer||this._state!==2&&(requestAnimationFrame(()=>this._render(performance.now())),this._renderIfNeeded(e))}renderIfNeeded(){return this._renderIfNeeded(performance.now())}_renderIfNeeded(e){if(e-this._lastFrameTimeInMs<1e3/60||!this._pixiRenderer)return!1;const i=this._lastFrameTimeInMs?e-this._lastFrameTimeInMs:0;if(this._lastFrameTimeInMs=e,this._updatePositions(),this._state===2)return!0;if(this._state==0)return this._pixiRenderer.background.color=this._loadingScreenData.backgroundColor,(!this._backgroundSprite||this._backgroundSprite.texture.valid)&&this._startLoadingScreen(),!0;const r=this._loadingScreenData.backgroundFadeInDuration;if(this._backgroundSprite||d(this._pixiRenderer.background,r,i),this._pixiRenderer.clear(),d(this._backgroundSprite,r,i),_(this._backgroundSprite)){this._backgroundReadyTimeInMs||(this._backgroundReadyTimeInMs=e);const t=this._loadingScreenData.logoAndProgressFadeInDuration,s=this._loadingScreenData.logoAndProgressLogoFadeInDelay;e-this._backgroundReadyTimeInMs>s*1e3&&(d(this._gdevelopLogoSprite,t,i),d(this._progressBarGraphics,t,i))}if(this._progressBarGraphics){const t=this._loadingScreenData.progressBarColor;let s=this._loadingScreenData.progressBarWidthPercent/100*this._pixiRenderer.width;this._loadingScreenData.progressBarMaxWidth>0&&s>this._loadingScreenData.progressBarMaxWidth&&(s=this._loadingScreenData.progressBarMaxWidth),this._loadingScreenData.progressBarMinWidth>0&&s<this._loadingScreenData.progressBarMinWidth&&(s=this._loadingScreenData.progressBarMinWidth);const o=this._loadingScreenData.progressBarHeight,g=Math.floor(this._pixiRenderer.width/2-s/2),l=this._pixiRenderer.height<350?Math.floor(this._pixiRenderer.height-10-o):Math.floor(this._pixiRenderer.height-90-o),h=1,u=Math.min(1,(this._progressPercent+1)/100);this._progressBarGraphics.clear(),this._progressBarGraphics.lineStyle(h,t,1,0),this._progressBarGraphics.drawRect(g,l,s,o),this._progressBarGraphics.beginFill(t,1),this._progressBarGraphics.lineStyle(0,t,1),this._progressBarGraphics.drawRect(g+h,l+h,s*u-h*2,o-h*2),this._progressBarGraphics.endFill()}return this._pixiRenderer.render(this._loadingScreenContainer),!0}unload(){const e=(performance.now()-this._startTimeInMs)/1e3,i=Math.min(this._loadingScreenData.showGDevelopSplash?this._loadingScreenData.logoAndProgressLogoFadeInDelay+this._loadingScreenData.logoAndProgressFadeInDuration:Number.POSITIVE_INFINITY,this._loadingScreenData.backgroundImageResourceName||this._loadingScreenData.backgroundColor?this._loadingScreenData.backgroundFadeInDuration:Number.POSITIVE_INFINITY);if(!this._isFirstLayout||this._isWatermarkEnabled&&e<i/2||e>this._loadingScreenData.minDuration)return this._state=2,Promise.resolve();const r=this._loadingScreenData.minDuration-e;return this.setPercent(100),new Promise(t=>setTimeout(()=>{this._state=2,t()},r*1e3))}}p.LoadingScreenRenderer=c})(gdjs||(gdjs={}));
//# sourceMappingURL=loadingscreen-pixi-renderer.js.map


var gdjs;
(function(p) {
    let LoadingScreenState;
    (function(state) {
        state[state.NOT_STARTED = 0] = "NOT_STARTED";
        state[state.STARTED = 1] = "STARTED";
        state[state.FINISHED = 2] = "FINISHED";
    })(LoadingScreenState || (LoadingScreenState = {}));

    const fadeIn = (sprite, duration, deltaTime) => {
        if (!sprite) return;
        if (duration > 0) {
            sprite.alpha += (1 / duration) * (deltaTime / 1000);
            if (sprite.alpha > 1) sprite.alpha = 1;
        } else {
            sprite.alpha = 1;
        }
    };

    const isFadeInComplete = (sprite) => !sprite || sprite.alpha >= 1;

    class LoadingScreenRenderer {
        constructor(runtimeGame, pixiImageManager, loadingScreenData, isWatermarkEnabled, isFirstLayout) {
            this._backgroundSprite = null;
            this._gdevelopLogoSprite = null;
            this._progressBarGraphics = null;
            this._state = 0;
            this._startTimeInMs = 0;
            this._backgroundReadyTimeInMs = 0;
            this._lastFrameTimeInMs = 0;
            this._progressPercent = 0;

            this._loadingScreenData = loadingScreenData;
            this._isWatermarkEnabled = isWatermarkEnabled;
            this._isFirstLayout = isFirstLayout;
            this._loadingScreenContainer = new PIXI.Container();
            this._pixiRenderer = runtimeGame.getPIXIRenderer();

            if (!this._pixiRenderer) return;

            const backgroundTexture = pixiImageManager.getOrLoadPIXITexture(loadingScreenData.backgroundImageResourceName);
            if (backgroundTexture !== pixiImageManager.getInvalidPIXITexture()) {
                this._backgroundSprite = PIXI.Sprite.from(backgroundTexture);
                this._backgroundSprite.alpha = 0;
                this._backgroundSprite.anchor.x = 0.5;
                this._backgroundSprite.anchor.y = 0.5;
                this._loadingScreenContainer.addChild(this._backgroundSprite);
            }

            if (loadingScreenData.showGDevelopSplash && isFirstLayout) {
                // Load YOUR custom image instead of the default GDevelop logo
                this._gdevelopLogoSprite = PIXI.Sprite.from(PIXI.Texture.from('custom-splash.png'));
                this._gdevelopLogoSprite.alpha = 0;
                this._gdevelopLogoSprite.anchor.x = 0.5;
                this._gdevelopLogoSprite.anchor.y = 0.5;
                this._loadingScreenContainer.addChild(this._gdevelopLogoSprite);
            }

            // The progress bar is completely disabled by not creating it here.

            this._render(performance.now());
        }

        setPercent(percent) {
            this._progressPercent = percent;
        }

        _startLoadingScreen() {
            if (!this._pixiRenderer) return;
            this._state = 1;
            this._startTimeInMs = performance.now();
        }

        _updatePositions() {
            if (!this._pixiRenderer) return;

            if (this._backgroundSprite && this._backgroundSprite.texture.valid) {
                this._backgroundSprite.position.x = this._pixiRenderer.width / 2;
                this._backgroundSprite.position.y = this._pixiRenderer.height / 2;
                const scale = Math.max(this._pixiRenderer.width / this._backgroundSprite.texture.width, this._pixiRenderer.height / this._backgroundSprite.texture.height);
                this._backgroundSprite.scale.x = scale;
                this._backgroundSprite.scale.y = scale;
            }

            if (this._gdevelopLogoSprite) {
                this._gdevelopLogoSprite.position.x = this._pixiRenderer.width / 2;
                this._gdevelopLogoSprite.position.y = this._pixiRenderer.height / 2;
                
                // IMPORTANT: Change 680 to match the actual width of your custom-splash.png
                const logoWidth = 680; 
                const margin = this._pixiRenderer.width > this._pixiRenderer.height && this._pixiRenderer.width > 500 ? 150 : 35;
                const scale = Math.min(logoWidth, Math.max(1, this._pixiRenderer.width - margin * 2)) / logoWidth;
                
                this._gdevelopLogoSprite.scale.x = scale;
                this._gdevelopLogoSprite.scale.y = scale;
                this._gdevelopLogoSprite.visible = this._pixiRenderer.width > 200 && this._pixiRenderer.height > 200;
            }
        }

        _render(now) {
            if (!this._pixiRenderer || this._state === 2) return;
            requestAnimationFrame(() => this._render(performance.now()));
            this._renderIfNeeded(now);
        }

        renderIfNeeded() {
            return this._renderIfNeeded(performance.now());
        }

        _renderIfNeeded(now) {
            if (now - this._lastFrameTimeInMs < 1000 / 60 || !this._pixiRenderer) return false;
            const deltaTime = this._lastFrameTimeInMs ? now - this._lastFrameTimeInMs : 0;
            this._lastFrameTimeInMs = now;
            this._updatePositions();

            if (this._state === 2) return true;

            if (this._state == 0) {
                this._pixiRenderer.background.color = this._loadingScreenData.backgroundColor;
                if (!this._backgroundSprite || this._backgroundSprite.texture.valid) {
                    this._startLoadingScreen();
                }
                return true;
            }

            const backgroundFadeInDuration = this._loadingScreenData.backgroundFadeInDuration;
            if (this._backgroundSprite || (this._pixiRenderer.background, fadeIn(this._pixiRenderer.background, backgroundFadeInDuration, deltaTime))) {
                this._pixiRenderer.clear();
                fadeIn(this._backgroundSprite, backgroundFadeInDuration, deltaTime);
                
                if (isFadeInComplete(this._backgroundSprite)) {
                    if (!this._backgroundReadyTimeInMs) this._backgroundReadyTimeInMs = now;
                    const logoFadeInDuration = this._loadingScreenData.logoAndProgressFadeInDuration;
                    const logoFadeInDelay = this._loadingScreenData.logoAndProgressLogoFadeInDelay;
                    
                    if (now - this._backgroundReadyTimeInMs > logoFadeInDelay * 1000) {
                        fadeIn(this._gdevelopLogoSprite, logoFadeInDuration, deltaTime);
                    }
                }
            }

            // The loading bar rendering block has been completely removed.

            this._pixiRenderer.render(this._loadingScreenContainer);
            return true;
        }

        unload() {
            const elapsedTime = (performance.now() - this._startTimeInMs) / 1000;
            const minDuration = Math.min(
                this._loadingScreenData.showGDevelopSplash ? this._loadingScreenData.logoAndProgressLogoFadeInDelay + this._loadingScreenData.logoAndProgressFadeInDuration : Number.POSITIVE_INFINITY,
                this._loadingScreenData.backgroundImageResourceName || this._loadingScreenData.backgroundColor ? this._loadingScreenData.backgroundFadeInDuration : Number.POSITIVE_INFINITY
            );

            if (!this._isFirstLayout || (this._isWatermarkEnabled && elapsedTime < minDuration / 2) || elapsedTime > this._loadingScreenData.minDuration) {
                this._state = 2;
                return Promise.resolve();
            }

            const remainingTime = this._loadingScreenData.minDuration - elapsedTime;
            this.setPercent(100);

            return new Promise(resolve => setTimeout(() => {
                this._state = 2;
                resolve();
            }, remainingTime * 1000));
        }
    }

    p.LoadingScreenRenderer = LoadingScreenRenderer;
})(gdjs || (gdjs = {}));

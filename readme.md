[[ > Русский < ]](https://github.com/Maks1mio/YMusic-DRPC/tree/patcher) - [[ English ]](https://github.com/Maks1mio/YMusic-DRPC/blob/patcher/doc/en/readme.md)
![image](https://github.com/Maks1mio/YMusic-DRPC/assets/44835662/ee18b157-914d-495c-a4a0-7569ad0a2872)

<p align="center">
   <a href="https://discord.gg/qy42uGTzRy">
      <img width="250" alt="YMusic-DRPC приглашение" src="https://github.com/Maks1mio/YMusic-DRPC/assets/44835662/405a8b18-1383-45d0-944a-8d7e4abf6e42">
   </a>
</p>

**Интеграция Discord Rich Presence для YandexMusic - Документация**

*Примечание: Следующие инструкции предполагают, что Яндекс Музыка BETA 5.0.19 установлен в стандартном каталоге ("AppData\Local\Programs\YandexMusic"). Убедитесь, что Яндекс Музыка закрыта.*

**Скриншоты**

![image](https://github.com/Maks1mio/YMusic-DRPC/assets/44835662/433a2d4e-6836-438e-8100-151bf405546f)

<p align="center">
   <a href="https://discord.gg/qy42uGTzRy">
      <img width="45%" alt="1" src="https://github.com/Maks1mio/YMusic-DRPC/assets/44835662/cea9c24e-8249-4f84-8c8b-f7120475e3bb">
      <img width="45%" alt="2" src="https://github.com/Maks1mio/YMusic-DRPC/assets/44835662/f576e409-3378-4bf0-b153-b01a6d5c13c3">
   </a>
</p>

### Этапы установки:

1. **Скачайте YandexMusic:**
   - Скачайте YandexMusic BETA 5.0.19 с [Yandex Music](https://music.yandex.ru/download/?utm_source=music&utm_medium=selfpromo_music&utm_term=branding&utm_campaign=app).
   - Установите YandexMusic в стандартный каталог: `C:\Users\<ВашеИмя>\AppData\Local\Programs\YandexMusic`.

2. **Скачайте файлы приложения**
   - Скачайте файлы проекта или склонируйте проект с помошью консоли:
    ```bash
    git clone https://github.com/Maks1mio/YMusic-DRPC.git
    ```
   - Склонируйте в каталог Programs: `C:\Users\<ВашеИмя>\AppData\Local\Programs`.

    ### Структура каталогов:
    ```markdown
    | Local\Programs        | Files              |
    |-----------------------|--------------------|
    | YMusic-DRPC/          |                    |
    | |-- YandexDiscordRPC/ |                    |
    | |   |-- index.js      |                    |
    | |   |-- другие файлы..|                    |
    | YandexMusic/          |                    |
    | |-- Яндекс Музыка.exe |                    |
    | |-- другие файлы...   |                    |
    ```
3. **Установите Node.Js
   - Загрузите и установите Node.Js перейдя по [ссылке](https://nodejs.org/dist/v21.7.3/node-v21.7.3-x64.msi) (загрузка начнется автоматически).
4. **Установите Yarn и Electron:**
   - Установите Yarn, Electron и @electron-forge/cli с помощью консоли:
    ```bash
    npm i -g yarn
    npm i -g electron
    npm i -g @electron-forge/cli
    npm i --save-dev @electron-forge/cli
     
    ```
   - Убедитесь, что Yarn и Electron установлен, запустив:
    ```bash
    yarn --version
    electron --version
     
    ```
5. **Установите зависимости:**
   - Установите зависимости в директорию проекта `C:\Users\<ВашеИмя>\AppData\Local\Programs\YMusic-DRPC` с помощью консоли:
    ```bash
    yarn global add @electron-forge/cli
    yarn install
     
    ```
   5.1 **Ошибка There appears to be trouble with your network connection.**
      - В случае возникновения ошибки `info There appears to be trouble with your network connection. Retrying...` рекомендуется перезагурзить компьютер. После повторите `yarn install` в директории проекта.
      - Если перезагрузка не помогла, возможно Yarn пытается установить пакеты через Proxy, которые по умолчанию в нём неопределенны, в таком случае просто удалите их введя следующие команды в консоль:
        ```bash
        yarn config delete https-proxy
        yarn config delete proxy
         
        ```
    
7. **Запустите приложение:**
    - Запустите приложение с помощью консоли:
     ```bash
     yarn start
     ```
    - Нажмите кнопку `Запатчить Яндекс Музыку`, для установки скрипта в Яндекс Музыку.

8. **Ошибки и прочие проблемы:**
   - Ошибки и проблемы при установке или работе приложения могут возникнуть всегда. Вы можете создать `issue` c описанием вашей проблемы или написать о проблеме на дискорд серевере [YandexMusic DRPC](https://discord.gg/qy42uGTzRy) где вам постараются помочь.



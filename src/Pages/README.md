Структура проекта AVITO:
- в папке public лежат imges и шрифты к проекту
- в папке src: 

Корневой каталог:
- основые настройки проекта
- файлы по докеру
- глобальные стили
- карта Routes и ProtectRoutes

Папки:

API-запросы:
- host - путь до хоста
- tokenApi - обновление и запрос на токен в fetch запросах
- userApi - регистрация и вход

Components:
- ToLeftSvg - стрелка-ссылка на главную страницу
- Card компонента карточки товара
- Editor компонент редактора объявления
- Footer - подвал
- Header для главной страницы
- HeaderAdditional для остальных страниц
- Loader заглушка для юзера во время ожидания данных
- ModalSuccess появлящаяся запись во время сохранения данных
- NewProductAdd компонента для нового объявдения
- Registration: 2 компонента  - для регистрации и входа
- ReturnToMain компонента-возврат на главную
- Review отзыв о товаре
- Search поиск по объявдениям

helpers:
- delAndUpImg для удаления и загрузки img
- price обработка input'а price
- sign функции для обработки данных пользователя, валидация, регистрация при РЕГИСТРАЦИИ
- time функции обработки времени
- token функции для разных работ с tokens
- user для загрузки, удаления avatar пользователя, сохранения локально данных пользователя

Pages:
- Main главная страница
- NotFound: страница 404
- Product Карточка товара
- Profile страница текущего пользователя
- Registration страница регистрации и входа, ведет к 2 компонентам.
- SellerProfile страница профиля продавца товара

Store:
- getAds получение всех объявлений
- getAdvId получение объявления по ID, изменение, удаление и добавления картинок
- getComments получение и добавления комментариев к объявлению
- getMe получение и изменение данных пользователя
- getMyAds получение, изменение, удаление и добавление объявлений от пользователя
- getToken получение и обновление токенов
- getUsers получение всех пользоваетелей
